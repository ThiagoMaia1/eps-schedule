import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa'
import { useFooterStyles } from './Footer.styles'
import { getEventData } from '../sessionData'

// Developer info (always the same)
const fullName = 'Thiago Pereira Maia'
const gitHubUrl = 'https://github.com/ThiagoMaia1'
const linkedinUrl = 'https://www.linkedin.com/in/thiago-pereira-maia-75b825199/'
const projectRepoUrl = 'https://github.com/ThiagoMaia1/eps-schedule'
const developerEmail = 'tthiagopmaia@gmail.com'

// Default footer configuration (for EPS 2025)
const defaultFooterConfig = {
  officialSourceUrl: 'https://etsjets.org/annual-meeting-overview/',
  officialSourceName: 'the official ETS Annual Meeting page',
  lastUpdated: 'January 15, 2025',
}

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

  // Get footer configuration from current event data
  const eventData = getEventData()
  const footerConfig = eventData.footerConfig || defaultFooterConfig

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.disclaimerSection}>
          <p className={classes.disclaimer}>
            ⚠️ This is an <strong>unofficial</strong> website. For official
            information, please visit{' '}
            <a
              href={footerConfig.officialSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.sourceLink}
            >
              {footerConfig.officialSourceName}
            </a>
            .
          </p>
          {footerConfig.lastUpdated && (
            <p className={classes.lastUpdated}>
              Data last updated: {footerConfig.lastUpdated}
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
            <a href={`mailto:${developerEmail}`} className={classes.emailLink}>
              {developerEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
