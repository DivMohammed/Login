import { useRef } from 'react';
import emailjs from '@emailjs/browser';


import './ContactUs.css'



// import jd from '../../imgs/jd.png'
// import regImg from '../../imgs/regImg.jpg'
import contactImg from '../../imgs/contactImg.png'


const ContactUs = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jbz08lh', 'template_qar8dgw', form.current, '2R7gUq1fzXiKPwqfx')
      .then((result) => {
          e.target.reset()
      }, (error) => {
        e.target.reset()
      });
    }

  return (
    <>
    <div className="Discount" id="Request A Discount">
    <div className="info">
    <img src={contactImg} alt="" />
    </div>
  <div className="Request">
    <div className="hold">
    <h2>كيف نستطيع خدمتك</h2>
    <form ref={form} onSubmit={sendEmail}>
      <input className="name input" type="name" placeholder="الأسم" name="user_name" />
      <input className="email input" type="email" placeholder="البريد الألكتروني"  name="user_email" />
      <input className="phone input" type="phone" placeholder="رقم الهاتف"  name="user_number" />
      <textarea className="text input" type="text" placeholder="سؤال أو أستفسار" name="message" ></textarea>
      <input className="submit input" type="submit" value="أرسال" />
    </form>
    </div>
  </div>
</div>
    </>
  )
}

export default ContactUs