import './OurServices.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





import imgTitle from '../../imgs/imgTitle.png'
// import imgTitlePrev from '../../imgs/imgTitlePrev.png'
import imgPrev from '../../imgs/imgPrev.png'
import icondefult from '../../imgs/icondefult.jpg'


import {Container} from 'react-bootstrap'

import { BsWindowDock } from "react-icons/bs";
import { AiOutlineIdcard } from "react-icons/ai";
import { PiFlagBannerFill } from "react-icons/pi";
import { TbChartInfographic } from "react-icons/tb";
import { BiSticker } from "react-icons/bi";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { RiAdvertisementFill } from "react-icons/ri";
import { BsFillPostageHeartFill } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";
import { LuPackageCheck } from "react-icons/lu";
import { BiColor } from "react-icons/bi";
import { MdPreview } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { BsFolderCheck } from "react-icons/bs";
import { useState } from 'react';




const OurServices = () => {
    // window.innerWidth <= 995 ? 2 : window.innerWidth <= 770 ? 1 : 3 
    // const [change, ] = useState()

    const [change, ] = useState(() => {
        if (window.innerWidth <= 995 && window.innerWidth >= 770) {
        return 2;
        } else if (window.innerWidth <= 770){
        return 1
        }
        return 3;
        });
    

    return (
    <>
    <Container>
    <div className='hold_OurServices' id='OurServices'>

    <div className='hold_OurServices_title'>

    <div className='hold_title'>
        <img src={imgTitle} alt="" />
        <h1>خدماتنا</h1>
    </div>

    <div className='hold_list_OurServices'>
    <ul className='list_OurServices'>
        <li>التعرف على واجهة الاليستريتور<span><BsWindowDock/></span></li>
        <li>تصميم بزنس كارد<span><AiOutlineIdcard/></span></li>
        <li>تصميم بانرات أو رول أب<span><PiFlagBannerFill/></span></li>
        <li>تصميم انفوجرافيك احترافي<span><TbChartInfographic/></span></li>
        <li>تصميم استكرات التغليف<span><BiSticker/></span></li>
        <li>تصميم ورق تغليف الهدايا و الباترن<span><HiOutlineGiftTop/></span></li>
        <li>تصميم الاعلانات التجارية<span><RiAdvertisementFill/></span></li>
        <li>تصميم بوستات مواقع التواصل<span><BsFillPostageHeartFill/></span></li>
        <li>تصميم ايقونات الانستقرام<span><AiOutlineInstagram/></span></li>
    </ul>

    <ul className='list_OurServices'>
        <li>تصميم سيرة ذاتية<span><HiOutlineNewspaper/></span></li>
        <li>رسم شعارات بسيطة<span><PiCodesandboxLogoDuotone/></span></li>
        <li>تصميم و تهيئة حساب المصمم<span><MdManageAccounts/></span></li>
        <li>طريقة استخدام القوالب الجاهزة<span><LuPackageCheck/></span></li>
        <li>طريقة أختيار الألوان<span className='uniq'><BiColor/></span></li>
        <li>طريقة عرض تصميمك للعميل <br /> باحترافية بواسطة الموك أب<span><MdPreview/></span></li>
        <li>أهم المواقع للمصممين<span><CgWebsite/></span></li>
        <li>طريقة تصدير الملفات للعميل<span><BsFolderCheck/></span></li>
    </ul>
    </div>

<div className='hold_Examples'>
    <div className='hold_title'>
        <img src={imgPrev} alt="" className='change'/>
        <h1>تطبيق المتدربين</h1>
    </div>
    </div>


    <div className='hold_Examples'>
<div className="swiper home-slider">

<div className="swiper-wrapper">

   <Swiper
   // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={change}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
   // onSwiper={(swiper) => console.log(swiper)}
   // onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
    <div className="swiper-slide slide" style={{background: "url(/src/imgs/prev1.jpg) no-repeat" , maxWidth:"100%"}}>
            </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="swiper-slide slide" style={{background: "url(/src/imgs/prev5.jpg) no-repeat"}}>
            </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="swiper-slide slide" style={{background: "url(/src/imgs/prev2.jpg) no-repeat"}}>
            </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="swiper-slide slide" style={{background: "url(/src/imgs/prev3.jpg) no-repeat"}}>
            </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="swiper-slide slide" style={{background: "url(/src/imgs/prev4.jpg) no-repeat"}}>
            </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="swiper-slide slide" style={{background: "url(/src/imgs/prev6.jpg) no-repeat"}}>
            </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="swiper-slide slide" style={{background: "url(/src/imgs/prev7.jpg) no-repeat"}}>
            </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="swiper-slide slide" style={{background: "url(/src/imgs/prev8.jpg) no-repeat"}}>
            </div>
    </SwiperSlide>

...
   
    </Swiper>
    </div>

</div>
</div>



















<div className='hold_Examples'>
    <div className='hold_title'>
        <img src={imgPrev} alt="" className='change'/>
        <h1>أراء المتدربين</h1>
    </div>
    </div>


    <div className='hold_Examples'>
<div className="swiper home-slider">

<div className="swiper-wrapper">

   <Swiper
   // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={change}
    navigation
    pagination={{ clickable: true }}
    >
    <SwiperSlide>
    <div className='hold_Examples_card_hold'>
      <img src={icondefult} alt={icondefult}/>
      <div className="card-body">
        <h4>أسماء محمد</h4>
        <p>احسن دورة سجلت فيها و ما ضاعت فلوسي كذا الشرح واضح ز المدربة سارة تجنن تشرح من قلب و تعيد و تزيد بكل رواق ولا تحسس احد انه شيء سخيف اللي بيسأل عنه</p>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='hold_Examples_card_hold'>
      <img src={icondefult} alt={icondefult}/>
      <div className="card-body">
        <h4>أسماء محمد</h4>
        <p>من أفضل الكورسات الي دخلتها, بصراحه كثييير استفدت منها و شرح المدربه كان مرااا يجنن و أنصحكم تأخذوا كورسات من هذي المنصه لأن حقيقي رح تستفيدوا مرااا كثييير</p>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='hold_Examples_card_hold'>
      <img src={icondefult} alt={icondefult}/>
      <div className="card-body">
        <h4>أسماء محمد</h4>
        <p>اشكركم من قلبي على هالدورة الجميلة و اكيييد في محلها جدا استمتعت بكل لحظه و كل شيء تعلمته بهالدورة ما توقعت ابدا اني بطلع منها بهذا المستوى و انا بادية من تحت الصفر بالتصميم</p>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='hold_Examples_card_hold'>
      <img src={icondefult} alt={icondefult}/>
      <div className="card-body">
        <h4>أسماء محمد</h4>
        <p>الدورة كانت ممتعة جدا و الرسوم قليلة جدا مقارنة بحم الفائدة, أ/ساره جيلان كانت احترافيه و منظمة من جميع النواحي و أيصال المعلومة كان بسيط و ممتع و ملهم .. سعيدة جدا اني أخذت هذه الخطوة و سدو كان اختيار موفق الحمد الله</p>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='hold_Examples_card_hold'>
      <img src={icondefult} alt={icondefult}/>
      <div className="card-body">
        <h4>أسماء محمد</h4>
        <p>يا جمال و أبداع شرحك ..أنصح كل من لديه شغف بالتصميم الجرافيكي أن ينضم لدورتك.. عمل مبهر .أمانه و صدق في التعامل ربنا يسعدك و يوفقك في خطواتك للنجاح الباهر قولي أمين</p>
      </div>
      </div>
    </SwiperSlide>

...
   
    </Swiper>
    </div>

</div>
</div>

    </div>
    </div>
    </Container>
    </>
  )
}



{/* <div className='hold_OurServices_img'>
    <img src={imgTitlePrev} alt="" />
    </div> */}

export default OurServices