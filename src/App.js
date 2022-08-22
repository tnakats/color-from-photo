import React, { useState } from 'react';
import './App.css';
import Resizer from 'react-image-file-resizer';


function App() {
  const [img, setImg] = useState();

  const onUpload= (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };
  
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        10,
        0,
        (uri) => {
          resolve (uri);
        },
        "base64"
      );
    });

  const onFileResize = async (e) => {
    try {
      const file = e.target.files[0];
      const image = await resizeFile(file);
      console.log(image);
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
        <input 
          type="file" 
          accept="image/*"
          id="fileSelect"
          onChange={onUpload}
          hidden
          />

        <img className="photo" src={img} alt=""/>
        
         <label for="fileSelect">
          Add Image
        </label>
        <img className="colorPallette" src={img} alt="" onChange={onFileResize}/>
    </div>

    
  );
}


export default App;
