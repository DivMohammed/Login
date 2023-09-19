import './JoinUs.css'


import WhatsAppIcon from '../../imgs/WhatsApp_icon.png'
import logo from '../../imgs/logo.png'
import imgPrev from '../../imgs/imgTitle.png'

const JoinUs = () => {
  return (
    <>
    <div className='join_us'>
    <div className='hold_social'>
      <img className='background' src={imgPrev} alt="" />
      <img className='logo' src={logo} alt="" />
      <img className='WhatsAppIcon' src={WhatsAppIcon} alt="" />
    </div>

    <h3>منصة سدم للتصميم الجرافيكي</h3>

    <a href="https://api.whatsapp.com/send/?phone=966564295749&text&type=phone_number&app_absent=0" target='blank' style={{textDecoration:"none"}}>
    <button >
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
          <path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z">
          </path>
        </svg>
    </div>
  </div>
    <span>WhatsApp</span>
  </button>
  </a>
    </div>
    </>
  )
}

export default JoinUs