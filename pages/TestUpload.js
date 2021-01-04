import React, {useState} from "react"
import axios from "axios"

const TestUpload = () =>{
  const [file, setFile] = useState('');

  const onChange = e =>{
    console.log(e.target.files[0])
    setFile(e.target.files[0])
    console.log(file)
  }

  const onSubmit = async e =>{
    e.preventDefault()

    const formData = new FormData();
    formData.append('file', file);
    formData.append('pns_orang_id', 12);
    formData.append('usulan_id', '4a2f2704-f556-4208-a745-2b61dc82145a');
    
    try{
      const res = await axios.post('https://cors-anywhere.herokuapp.com/http://202.125.94.151:9393/api/peremajaan/upload-dok', formData,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(res.data)
    }catch(err){
      console.log(err)
    }    
  }

  return (
    <div className="page-upload">
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onChange}/>
        <button type="submit">upload</button>
      </form>
    </div>
  );
}

export default TestUpload;