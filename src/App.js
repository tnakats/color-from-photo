import React, { useContext, useState } from 'react';
import './App.css';
//import './colorPicker.js';

function App() {
  const [img, setImg] = useState();

  const onUpload = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    const context = document.getElementsByClassName("canvas").getContext('2d');
    context.drawImage(img, 400, 200);
  };

  const changeID = (e) => {
    console.log("changeID");
    console.log(e);
    const element = e.target;
    //document.getElementsByClassName(e);
    console.log(element.className);
    //e.id.setAttribute(this);
    e.id.setAttribute("current");
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
        <canvas id="canvas"></canvas>
        <img className="photo" src={img} alt=""/>
        <label for="fileSelect">
          Add Image
        </label>
        <button className="color1" id="c1" onClick={changeID}/>
        <button className="color2" id=""/>
        <button className="color3" id=""/>
        <button className="color4" id=""/>
        <button className="color5" id=""/>
    </div>
  )
}


export default App;
