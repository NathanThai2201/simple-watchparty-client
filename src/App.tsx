
import './App.css'
import VideoPlayer from "./VideoPlayer";
import { useRef, useState } from "react";


function App() {
  const [dynamiccol, setdynamiccol] = useState("");
  const [dynamiccol2, setdynamiccol2] = useState("");
  const dynamiccolswitch = useRef(0);

  const handleClick = () => {
    console.log(dynamiccolswitch);
        if (dynamiccolswitch.current ===0){
          setdynamiccol('#FFFFFF');
          setdynamiccol2('#000000');
          dynamiccolswitch.current = 1;
        } else{
          setdynamiccol('#2e2e2e');
          setdynamiccol2('#FFFFFF');
          dynamiccolswitch.current = 0;
        }
    };
  return (
    <div className='main-container' style={{backgroundColor:dynamiccol}}>
      {/* <h1>Watch Party</h1> */}
      <VideoPlayer />
      <div style={{height:'2vh'}}></div>
      <button className="button" style={{borderColor:dynamiccol2, color:dynamiccol2}}onClick={handleClick}> Toggle Nightmode</button>
    </div>
  );
}

export default App;
