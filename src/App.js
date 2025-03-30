import React, { useContext, useState } from 'react';
import './App.css';
//import {pick} from'./colorPicker.js';

function App() {
  const [img, setImg] = useState();

  const onUpload = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    // Select canvas element - <canvas> is a NodeList, need to access first element
    const canvas = document.getElementsByClassName("canvas")[0];
    const context = canvas.getContext('2d');

    // New image object, wait for load
    const imgElement = new Image();
    imgElement.onload = () => {
      context.drawImage(imgElement, 400, 200);
    }
    
    // Set the source of the image
    imgElement.src = URL.createObjectURL(file);
  };

  const changeID = (e) => {
    //console.log("changeID");
    //console.log(e);
    const element = e.target;
    //document.getElementsByClassName(e);
    //console.log(element.className);
    //e.id.setAttribute(this);

    // Remove 'current' from any pre-existing id 
    const current = document.getElementById("current");
    if (current) {
      current.removeAttribute("id");
    }
    // Set the onClick element's id to 'current'
    element.setAttribute("id", "current");

    /*
    var change = document.getElementById("current");
    console.log(change);
    document.getElementById("current").setAttribute("id", change.className);
    console.log(change.id);
    console.log("element" + element.id);
    document.getElementById(element.id).setAttribute("id", "current");
    console.log(element.id);
    */
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
        <canvas className="canvas"></canvas>
        <img className="photo" src={img} alt=""/>
        <label for="fileSelect">Add Image</label>
        <button className="color1" id="current" onClick={changeID}/>
        <button className="color2" id=" " onClick={changeID}/>
        <button className="color3" id=" " onClick={changeID}/>
        <button className="color4" id=" " onClick={changeID}/>
        <button className="color5" id=" " onClick={changeID}/>
    </div>
  )
}


export default App;
