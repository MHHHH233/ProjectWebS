import React from "react";
import {motion} from 'framer-motion'
import png1 from '../herosection/photos/png1.png';
import png2 from '../herosection/photos/png2.png';
import png3 from '../herosection/photos/png3.png';
import png4 from '../herosection/photos/png4.png';
import png5 from '../herosection/photos/png5.png';
import png6 from '../herosection/photos/png6.png';
import png7 from '../herosection/photos/png7.png';
import png8 from '../herosection/photos/png8.png';
import png9 from '../herosection/photos/png9.png';
import png10 from '../herosection/photos/png10.png';
import png11 from '../herosection/photos/png11.png';

export default function Carousel() {
    const imgs = [png8,png1, png2, png3, png4, png5, png6, png7,png9,png10,png11];
    
    return (
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
            <ul className="carousel-indicators">
                {imgs.map((_, idx) => (
                    <li
                        key={idx}
                        data-bs-target="#carouselId"
                        data-bs-slide-to={idx}
                        className={`btn rounded-circle ${idx === 0 ? 'active' : ''}`}
                        aria-current={idx === 0 ? 'true' : 'false'}
                        aria-label={`Slide ${idx + 1}`}
                    ></li>
                ))}
            </ul>
            <motion.div  className="carousel-inner" style={{ height: '500px'}} role="listbox">
                {imgs.map((imgSrc, idx) => (
                    <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                        <img
                            src={imgSrc}
                            className="w-100 d-block"
                            alt={`Slide ${idx + 1}`}
                            height="500px"
                        />
                    </div>
                ))}
            </motion.div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
