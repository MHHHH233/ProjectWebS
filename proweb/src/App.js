import { Herosection, NavbarA } from './sections/index';
import './App.css';
import vid1 from './sections/herosection/photos/vid1.mp4'
import {motion} from 'framer-motion'
import Carousel from './sections/herosection/Carousel';
import Cursor from './sections/herosection/tools/cursor.jsx'
function App() {
  return (
    <div style={{position:'relative'}}>
      <Cursor/>
      <motion.video initial={{x:10,opacity:0}}animate={{x:0, opacity:1}} transition={{delay:1, duration:2}} autoPlay muted loop style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover',zIndex:-1}}>
      <source src={vid1} type='video/mp4'></source>
      </motion.video>
      <NavbarA/>
      <Herosection/>
    </div>
  );
}

export default App;
