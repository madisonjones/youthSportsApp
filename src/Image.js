import React from 'react';
import ReactCoreImageUpload  from 'react-core-image-upload';
let App = React.createClass({
//... 
 
  render() {
    return(
      <div>
        <ReactCoreImageUpload
          text="Upload Your Image"
          className='pure-button'
          inputOfFile="files"
          url="./api/upload.php"
          imageUploaded={this.handleRes}>
        </ReactCoreImageUpload>
      </div>
    );
  },
 
  handleRes(res) {
    this.setState({
      // handle response 
    })
  }
})