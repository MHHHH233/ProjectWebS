import Carousel from "./Carousel";
import {motion} from 'framer-motion'
import  {FiArrowRight} from 'react-icons/fi'
export default function Herosession() {
  const style = {
    height: "500px",
  };
  return (
    <div className="Container">
        <div className="p-5">
           <hr className="d-flex align-content-center" />
        </div>
        <div className="container">
      <motion.div style={style} className="row "  initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{duration:2, delay:0.5}}>
      <div className="col-lg-12 col-12 px-3 text-canter">
    <h1 className="fw-bolder text-lg-start text-sm-center text text-light">Welcome to Your Ultimate </h1> <i className="fw-bolder text-light display-5">Shopping Destination</i>
    <p className="col-6 text-light text-start mt-5  " style={{fontSize:'25px'}}>Is your cart feeling empty?
      Visit our site, where every product feels heavenly.
      We’ve got deals and steals that will blow your mind,
      Come shop with us and see what treasures you’ll find.
</p>
    <motion.div
        className="text-center"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 1, repeat: 2 }}
    >
        <motion.button className="btn btn-primary rounded-5 bg-dark text-info px-4 py-3"initial={{ scale: 1 }} whileTap={{ scale: 0.95, rotate: "-2deg" }} style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}>
            Start Shopping <motion.i chi whileHover={{rotate:'-20deg'}} class="fa-solid fa-arrow-right"></motion.i>
        </motion.button>
    </motion.div>
    
</div>

        {/* <motion.div className="col-lg-6 col-12 " initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{duration:2, delay:1}}>
          
        </motion.div> */}
      </motion.div>
    </div>
    </div>
  );
}
