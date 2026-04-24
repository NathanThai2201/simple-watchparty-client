import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from "./VideoPlayer";

function App() {
  return (
    <div>
      {/* <h1>Watch Party</h1> */}
      <VideoPlayer />
    </div>
  );
}

export default App;
