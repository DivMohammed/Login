import './WhoAreWe.css'

import {Container} from 'react-bootstrap'

import imgTitle from '../../imgs/imgTitle.png'
import imgTitlePrev from '../../imgs/imgTitlePrev.png'
import imgMovement from '../../imgs/imgMovement.png'


import { FaUsers } from "react-icons/fa";
import { BiLogoZoom } from "react-icons/bi";
import { PiCertificateLight } from "react-icons/pi";
import { BsGiftFill } from "react-icons/bs";
import { BsHourglassSplit } from "react-icons/bs";
import { BsCalendarWeek } from "react-icons/bs";




const WhoAreWe = () => {
      return (
      <>
      <Container>
         <div  className='hold_WhoAreWe'>
         <div className='hold_WhoAreWe_img'>
         <img src={imgTitlePrev} alt="" />
         </div>

         <div className='hold_WhoAreWe_title'>
         <div className='hold_title'>
         <img src={imgTitle} alt="" />
         <h1>من نحن</h1>
         </div>
         <p> دورات مكثفة في التصميم الجرافيكي | من الصفر حتى تدخل سوق العمل👑قمنا بتدريب أكثر من 800 مصمم ومصممة بإشراف المدربة : سارة جيلان</p>
         </div>
         </div>
      </Container>
      {/* https://sunshinedesign.com.au/wp-content/uploads/2023/02/stufly_graphic_design_colourful_birds_exploding_out_powder_99bdc5ea-e29b-4c0a-986e-e9f557fdc032-1024x675.png */}
         <div className='img_movement' style={{backgroundImage: `url(${imgMovement})`}}>
         </div>
         
      <Container>
      <div className='hold_title'>
         <img src={imgTitle} alt="" />
         <h1>لماذا نحن</h1>
      </div>

   <ul className='features_why_us'>
      <li><span><PiCertificateLight className='icon'/></span>شهادة حضور <span className='text_highlight'>معتمدة</span></li>
      <li><span><FaUsers className='icon'/></span>قروب تفاعلي للمتدربين</li>
      <li><span><BsGiftFill className='icon'/></span>تحديات و <span className='text_highlight'>جوائز</span></li>
      <li><span><BiLogoZoom className='icon'/></span>أون لاين<span className='text_highlight'>ZOOM</span></li>
      <li className='text_highlight'><span><BsCalendarWeek className='icon'/></span>3<span >أسابيع تفاعليه</span></li>
      <li className='text_highlight'><span><BsHourglassSplit className='icon'/></span>23<span >ساعة تدريبية</span></li>
   </ul>
      </Container>
         </>
      )
}


export default WhoAreWe