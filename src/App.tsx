
import './App.css'
import VideoPlayer from "./VideoPlayer";
import { useRef, useState } from "react";


function App() {
  const [dynamiccol, setdynamiccol] = useState("");
  const dynamiccolswitch = useRef(0);

  const handleClick = () => {
    console.log(dynamiccolswitch);
        if (dynamiccolswitch.current ===0){
          setdynamiccol('#FFFFFF');
          dynamiccolswitch.current = 1;
        } else{
          setdynamiccol('#2e2e2e');
          dynamiccolswitch.current = 0;
        }
    };
  return (
    <div className='main-container' style={{backgroundColor:dynamiccol}}>
      {/* <h1>Watch Party</h1> */}
      <VideoPlayer />
      <button className="cardButton" onClick={handleClick}> Toggle Nightmode</button>
    </div>
  );
}

export default App;
