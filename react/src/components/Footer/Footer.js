import './Footer.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

const Footer = () => (
  <footer className='footer'>
    <div >
      <a href='#top' className='footer_btn' >
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </div>
    <p className='footer_txt'> GitHub Portfolio developed using ReactJS and hosted on GitHub Pages | {(new Date().getFullYear())}
    </p>
    <p>{
      /*
      <a href="https://hits.seeyoufarm.com"><img alt="" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Famitp98.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Views (Today and Total)&edge_flat=false"/>
      </a>
      */
      <a href="#top"><img alt="" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Famitp98.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Views (Today and Total)&edge_flat=false"/>
      </a>
    }
    </p>
  </footer>
)

export default Footer
