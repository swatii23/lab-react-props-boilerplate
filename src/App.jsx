import './App.css';
import elephant from "./images/elephant.jpeg";


function App({ imageData }) {
  // code here
  return (
    <div>
      <h2>Functional Component</h2>
      <div className="image-div">
        {imageData.map(image => (
          <div>
            <img key={image.id} src={image.img} alt={`image:${image.id}`} />          
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
