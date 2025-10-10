import { useState, useEffect } from 'react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa'
import './Footer.css'

const fullName = 'Thiago Pereira Maia'
const gitHubUrl = 'https://github.com/ThiagoMaia1'
const linkedinUrl = 'https://www.linkedin.com/in/thiago-pereira-maia-75b825199/'
const projectRepoUrl = 'https://github.com/ThiagoMaia1/eps-schedule'
const officialSourceUrl = 'https://etsjets.org/annual-meeting-overview/'

type Link = {
  logo: React.ComponentType<{ size: number }>
  name: string
  url: string
}

const links: Link[] = [
  { logo: FaCode, name: 'Project Repo', url: projectRepoUrl },
  { logo: AiOutlineGithub, name: 'GitHub', url: gitHubUrl },
  { logo: AiFillLinkedin, name: 'LinkedIn', url: linkedinUrl },
]

function Footer() {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)

  useEffect(() => {
    // Fetch the last commit date for the CSV file from GitHub API
    const fetchLastUpdated = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/ThiagoMaia1/eps-schedule/commits?path=public/ets_sessions_with_flags.csv&page=1&per_page=1'
        )
        if (response.ok) {
          const data = await response.json()
          if (data && data.length > 0) {
            const commitDate = new Date(data[0].commit.author.date)
            setLastUpdated(
              commitDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            )
          }
        }
      } catch (error) {
        console.error('Failed to fetch last updated date:', error)
      }
    }

    fetchLastUpdated()
  }, [])

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="disclaimer-section">
          <p className="disclaimer">
            ⚠️ This is an <strong>unofficial</strong> website. For official
            information, please visit{' '}
            <a
              href={officialSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="source-link"
            >
              the official ETS Annual Meeting page
            </a>
            .
          </p>
          {lastUpdated && (
            <p className="last-updated">Data last updated: {lastUpdated}</p>
          )}
        </div>
        <div className="developer-section">
          <span className="developed-by">Developed by {fullName}</span>
          <div className="footer-links">
            {links.map(({ logo: Logo, name, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                title={name}
              >
                <Logo size={24} />
                <span>{name}</span>
              </a>
            ))}
          </div>
          <p className="feedback-text">
            For any feedback or corrections, e-mail me at:{' '}
            <a href="mailto:tthiagopmaia@gmail.com" className="email-link">
              tthiagopmaia@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
