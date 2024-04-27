import App from "../App";
import AppClass from "../AppClass";
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
    }

function DataComponent() {
    return (
        <>
            <App imageData={imageData()}/>
            <AppClass imageData={imageData()}/>
        </>
        
    )
}