import { useState, useEffect } from 'react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa'
import { useFooterStyles } from './Footer.styles'

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
  const { classes } = useFooterStyles()
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
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.disclaimerSection}>
          <p className={classes.disclaimer}>
            ⚠️ This is an <strong>unofficial</strong> website. For official
            information, please visit{' '}
            <a
              href={officialSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.sourceLink}
            >
              the official ETS Annual Meeting page
            </a>
            .
          </p>
          {lastUpdated && (
            <p className={classes.lastUpdated}>
              Data last updated: {lastUpdated}
            </p>
          )}
        </div>
        <div className={classes.developerSection}>
          <span className={classes.developedBy}>Developed by {fullName}</span>
          <div className={classes.footerLinks}>
            {links.map(({ logo: Logo, name, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footerLink}
                title={name}
              >
                <Logo size={24} />
                <span>{name}</span>
              </a>
            ))}
          </div>
          <p className={classes.feedbackText}>
            For any feedback or corrections, e-mail me at:{' '}
            <a
              href="mailto:tthiagopmaia@gmail.com"
              className={classes.emailLink}
            >
              tthiagopmaia@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
