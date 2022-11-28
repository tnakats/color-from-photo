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
    //console.log("changeID");
    //console.log(e);
    const element = e.target;
    //document.getElementsByClassName(e);
    //console.log(element.className);
    //e.id.setAttribute(this);
    var change = document.getElementById("current");
    console.log(change);
    document.getElementById("current").setAttribute("id", change.className);
    console.log(change.id);
    console.log("element" + element.id);
    document.getElementById(element.id).setAttribute("id", "current");
    console.log(element.id);
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
        <button className="color1" id="current" onClick={changeID}/>
        <button className="color2" id=" " onClick={changeID}/>
        <button className="color3" id=" " onClick={changeID}/>
        <button className="color4" id=" " onClick={changeID}/>
        <button className="color5" id=" " onClick={changeID}/>
    </div>
  )
}


export default App;
