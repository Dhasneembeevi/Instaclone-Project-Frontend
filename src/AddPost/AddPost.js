import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./post.css";
function AddPost() {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [imagefile, setImageFile] = useState(''); // even image file is string
  const [description, setDescripition] = useState('');

  const uploadPost = () => {
    const formdata = new FormData(); // takes data in key value pairs
    // append is a method like set in map which sets key value pairs
    // when button clicked, all datas in input fields are captured inside FormData()it can capture multipart data ie media files
    // form data ==>  sorts out file data and regular string data before it will partition into files in arr[] , body to {obj}
    formdata.append("username", username);
    formdata.append("address", address);
    formdata.append("image_file", imagefile); // file stored as instance of file object
    formdata.append("description", description)
    console.log(formdata)
    fetch("https://instaclone-project-backend.onrender.com/post", { //fatch takes care of all FormData
      method: 'POST',
      // stringified data is send to server
      body: formdata
    })
  }
  return (
    <div>
      <div className='post-fields'>
        <div className='inputs'>
          <input  className='input-fields1' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className='inputs'>
          <input className='input-fields2' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} /></div>

        <div className='inputs' >
          <input className='input-fields3' type="file" onChange={(e) => setImageFile(e.target.files[0])} /></div>

        <div className='inputs'>
          <textarea className='input-fields4' placeholder='Description' value={description} onChange={(e) => setDescripition(e.target.value)} /></div>

        <Link to="/view" > <button onClick={uploadPost} className="submit"> POST</button></Link>
      </div>
    </div>
  );
}
export default AddPost;
console.log("dhas")