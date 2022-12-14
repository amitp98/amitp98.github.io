import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
          <h1 className='about__greeting animate__animated animate__fadeInUp animate__delay-400ms'>
          Hi, I am <span className='about__name'>{name}.</span>
          </h1>
      )}
 
      {role && <h2 className='about__role'>A {role}.</h2>}
      <h3 className='about__role animate__animated animate__fadeInUp animate__delay-600ms'>
        Welcome to my website!
      </h3>

      <p className='about__desc animate__animated animate__fadeIn animate__delay-1s'>{description && description}</p>

      <div className='about__contact center  animate__animated animate__fadeIn animate__delay-1s'>
        {social && (
          <>
            {social.github && (
              /*
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
              */
             <a href={social.github} target="_blank" rel="noopener noreferrer">
              <span type='button' className='btn-rounded-white'>
                <p className=''>GitHub</p>
              </span>
            </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
      <div className='about__contact center animate__animated animate__fadeIn animate__delay-1s'>
        {resume && (
          /*
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
          */
         <a href={resume}>
            <span type='button' className='btn-rounded-white'>
              Resume
            </span>
          </a>
        )}
      </div>
      <div className='arrow center animate__animated animate__fadeIn animate__delay-1s'>
        <a href='#projects'  >
          <ArrowDownwardIcon fontSize='large' />
        </a>
    </div>
    </div>
  )
}

export default About
