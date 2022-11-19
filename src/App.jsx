import Info from './info'
import Contact from "./contact"
import About from "./about"
import Footer from "./footer"
import {useState, useRef} from "react"
import Form from "./form"
import './App.css'

function App() {
const [entry,setEntry]=useState(false)

function handleEntry(){
  setEntry(prev=>!prev)
}
  
const [formdata, setFormdata] = useState({
  image: "",
  firstname: "",
  lastname: "",
  occupation: "",
  website: "",
  email: "",
  linkedin: "",
  about: "",
  interests: "",
  twitter: "",
  facebook: "",
  instagram: "",
  github: "",
});
console.log(formdata)
function handleChange(event) {
  const { name, value } = event.target;
  setFormdata((prev) => {
    return {
      ...prev,
      [name]: value,
    };
  });
}

  

const handleImageUpload = e => {
  const [file] = e.target.files;
  if (file) {
    const reader = new FileReader();
    // const { current } = uploadedImage;
    // current.file = file;
    reader.onload = e => {
      setFormdata(prev=>{
        return {
          ...prev,
          image : e.target.result
        }
      })
      // current.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
  return (
    <div className="App">
    {entry ? 
    <div >
    <button className="edit__button" onClick={handleEntry}>Edit</button>
    
    <Info formdata={formdata} />
    <Contact formdata={formdata} />
    <About formdata={formdata} />
    <Footer formdata={formdata} /> 
    
    </div>
    : <div>
    <Form handleChange={(event)=>handleChange(event)} handleImageUpload={(e)=>handleImageUpload(e)} handleEntry={handleEntry} />
    </div> }
    
      
    </div>
  )
}

export default App
