import './Footer.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

const Footer = () => (
  <footer className='footer'>
    <div >
      <a href='#top' className='footer_btn' >
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </div>
    <p className='footer_txt'>Personal Resume Website developed using ReactJS and hosted on Github Pages | {(new Date().getFullYear())}</p>
  </footer>
)

export default Footer
