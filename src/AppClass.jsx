import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  
  // code here
  render() {
    return (
      <div>
      <h2>Class Component</h2>
      <div className="image-div">
        {this.imageData().map(image => (
          <div>
            <img key={image.id} src={image.img} alt={`image:${image.id}`} />          
          </div>
        ))}
      </div>
    </div>
    )
  }
}
