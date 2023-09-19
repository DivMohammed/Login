import './Home.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Container} from 'react-bootstrap'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { GoPersonFill } from "react-icons/go";
import { AiOutlineFieldTime } from "react-icons/ai";
import { PiCertificateLight } from "react-icons/pi";
import WhoAreWe from '../WhoAreWe/WhoAreWe';
import OurServices from '../OurServices/OurServices';


const Home = () => {

  return (
<>
<section className="home" id="home">

<div className="swiper home-slider">

<div className="swiper-wrapper">

   <Swiper
   // install Swiper modules
   modules={[Navigation, Pagination, Scrollbar, A11y]}
   spaceBetween={50}
   slidesPerView={1}
   navigation
   pagination={{ clickable: true }}
   scrollbar={{ draggable: true }}
   // onSwiper={(swiper) => console.log(swiper)}
   // onSlideChange={() => console.log('slide change')}
   >
   <SwiperSlide>
   <div className="swiper-slide slide" style={{background: "url(/src/imgs/home0.jpg) no-repeat"}}>
             <div className="content">
                <span>عملائونا يعتمدون علينا</span>
                <h3>رضاك يهمنا</h3>
                <a href="#contact" className="btn">فلنبدأ</a>
             </div>
          </div>
   </SwiperSlide>
   <SwiperSlide>
   <div className="swiper-slide slide" style={{background: "url(/src/imgs/home1.jpg) no-repeat"}}>
             <div className="content">
                <span>هذه الخدمة تستحق التجربة</span>
                <h3>فريقنا يسعده تقديم أفضل خدمة لك</h3>
                <a href="#contact" className="btn">فلنبدأ</a>
             </div>
          </div>
   </SwiperSlide>
   <SwiperSlide>
   <div className="swiper-slide slide" style={{background: "url(/src/imgs/home2.jpg) no-repeat"}}>
             <div className="content">
                <span>رؤية عالمية لمستقبل مشرق</span>
                <h3>نرحب باستفساراتكم</h3>
                <a href="#contact" className="btn">فلنبدأ</a>
             </div>
          </div>
   </SwiperSlide>
   ...
   
 </Swiper>

</div>
</div>

<Container>
   <ul className='features'>
      <li><span><PiCertificateLight className='icon'/></span>شهادة حضور <span className='text_highlight'>معتمدة</span></li>
      <li><span><GoPersonFill className='icon'/></span> عدد المستخدمين <span className='text_highlight'>+800</span></li>
      <li><span><AiOutlineFieldTime className='icon'/></span> عدد الساعات <span className='text_highlight'>خلال أسبوعين و 15 ساعة</span></li>
   </ul>
</Container>
</section>
<WhoAreWe/>
<OurServices/>
</>
   )
}

export default Home