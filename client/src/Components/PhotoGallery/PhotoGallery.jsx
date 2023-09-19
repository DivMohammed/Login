// import { Container } from 'react-bootstrap'
import './PhotoGallery.css'

import prev from '../../imgs/prev2.jpg'

const PhotoGallery = () => {
  return (
    <>
    {/* <Container> */}
      <div className='Photo_gallery'>
          <div className="photo" style={{backgroundImage:`url('${prev}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div>
          <div className="photo" style={{backgroundImage:`url('${prev}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div>
          <div className="photo" style={{backgroundImage:`url('${prev}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div>
          {/* <div className="photo" style={{backgroundImage:`url('${prev}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div> */}
          {/* <div className="photo" style={{backgroundImage:`url('${prev}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div>
          <div className="photo" style={{backgroundImage:`url('${prev}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div>
          <div className="photo" style={{backgroundImage:`url('${prev}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div> */}
          <button type='button'>+</button>
      </div>
    {/* </Container> */}
    </>
  )
}

export default PhotoGallery