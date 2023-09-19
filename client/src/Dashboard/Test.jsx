import React from 'react'
// import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'

class Test extends React.Component {

  constructor(props) {
    super(props)
    const src = '../imgs/*'
    this.state = {
      preview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    // this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }
  
  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
  }

//   onBeforeFileLoad(elem) {
//     if(elem.target.files[0].size > 71680){
//       alert("File is too big!");
//       elem.target.value = "";
//     }
//   }


  
  render () {
    return (
      <div>
        {console.log(this.state.preview)}
        {console.log(this.state.src)}

<Avatar
          width={390}
          height={295}
          onCrop={this.onCrop}
          onClose={this.onClose}
        //   onBeforeFileLoad={this.onBeforeFileLoad}
          src={this.state.src}
        />
        <img src={this.state.preview} alt="Preview" />
      </div>
    )
  }
}

export default Test