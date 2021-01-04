import axios from "axios";

import React, { Component } from "react";

class FormUpload extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <p>File Details:</p>
          <small style={{ display: "block" }}>
            File Name: {this.state.selectedFile.name}
          </small>
          <small style={{ display: "block" }}>
            File Type: {this.state.selectedFile.type}
          </small>
          <small style={{ display: "block" }}>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </small>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <small>Choose before Pressing the Upload button</small>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {/* form geekstogeek axios */}
        {/* <div> 
				<input type="file" onChange={this.onFileChange} /> 
				<button onClick={this.onFileUpload}> 
				Upload! 
				</button> 
			</div>  */}
        {/* bootstrap upload form */}
        <div className='input-group'>
          <div class='custom-file'>
            <input size='10' disabled type='text' placeholder=' Pilih Berkas' />
            <input title='please' placeholder='a' type='file' />
          </div>
        </div>
      </div>
    );
  }
}

export default FormUpload;
