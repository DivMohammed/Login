
import './Footer.css'







import { AiOutlineInstagram } from "react-icons/ai";

import { HiOutlineLink } from "react-icons/hi";
import { FaTiktok } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";


import logo from '../../imgs/logo.png'

import prev1 from '../../imgs/prev1.jpg'
import prev2 from '../../imgs/prev2.jpg'
import prev3 from '../../imgs/prev3.jpg'
import prev4 from '../../imgs/prev4.jpg'
import prev5 from '../../imgs/prev5.jpg'
import prev6 from '../../imgs/prev6.jpg'

import madeBy from '../../imgs/madeBy.png'



const Footer = () => {
  return ( 
    <>
    <footer className="footer">
  <div className="container">
  <div className="hold_social">
    <img src={logo} alt="" />
    <ul className="social">
      <li>
        <a aria-label="Link to TikTok" href="https://www.tiktok.com/@sodom2030?_t" target='blank' className="tiktok">
          <FaTiktok/>
        </a>
      </li>
      <li>
        <a aria-label="Link to Twitter" href="https://twitter.com/sod" target='blank' className="twitter">
            <BsTwitter/>
        </a>
      </li>
      <li>
        <a aria-label="Link to Instagram" href="https://www.instagram.com/sodom2030/" target='blank' className="instagram">
          <AiOutlineInstagram/>
        </a>
      </li>
    </ul>
    <p>دورات مكثفة في التصميم الجرافيكي | من الصفر حتى تدخل سوق العمل👑قمنا بتدريب أكثر من 800 مصمم ومصممة</p>
  </div>
  <div className="hold_links">
    <ul className="links">
      <li><a href={window.origin}>الرئيسية</a><span><HiOutlineLink/></span></li>
      <li><a href="/WhoAreWe">من نحن</a><span><HiOutlineLink/></span></li>
      <li><a href="/OurServices">خدماتنا</a><span><HiOutlineLink/></span></li>
      <li><a href="/joinUs">أنضم ألينا</a><span><HiOutlineLink/></span></li>
      <li><a href="/ContactUs">تواصل معنا</a><span><HiOutlineLink/></span></li>
    </ul>
  </div>
  <div className="hold_line">
      <div className="line">
        <i className="fas fa-map-marker-alt fa-fw"></i>
        <div className="info">السعودية</div>
      </div>
      <div className="line">
        <i className="far fa-clock fa-fw"></i>
        <div className="info">متاحين على مدار 24 ساعة</div>
      </div>
      <div className="line">
        <i className="fas fa-phone-volume fa-fw"></i>
        <div className="info">
          <span>+⁦966 56 429 5749⁩</span>
          <span>sodom2030@gmail.com</span>
        </div>
    </div>
  </div>
  <div className="hold_img">
    <img src={prev1} alt="" />
    <img src={prev2} alt="" />
    <img src={prev3} alt="" />
    <img src={prev4} alt="" />
    <img src={prev5} alt="" />
    <img src={prev6} alt="" />
  </div>
  </div>
  <p className="copyright">Made With &lt;3 By <a href="https://protfile.pages.dev/" aria-label='to Mastermind' target='blank'><img style={{maxWidth:"7%"}} src={madeBy} alt="" /></a></p>
</footer>
    </>
  )
}

export default Footer
