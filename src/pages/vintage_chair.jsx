import React from "react";
import vintage_chair from "../image/vintage_chair.png"
import vintage_vase from "../image/large_vase.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Vintage_chair = ()=>{
   
    return(
        <>
        <div className="container">
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                1100: {
                    slidesPerView: 2,
                  },
                  700: {
                    slidesPerView: 1.5,
                  },
                576: {
                    slidesPerView: 1,
                  },

                391: {
                    slidesPerView: 1,
                },
                }}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="vintage_collection">
                <SwiperSlide>
                <div className="vintage_card1">

                    <img src={vintage_chair} alt="error" className="vintage_image"/>
                    <div className="vintage_texts">
                    <h3 className="xxxl_body_text vintage_heading">INY VINTAGE CHAIR</h3>
                    <span>
                    <button className="primary_button sale_button">VIEW DETAILS</button>
                    </span>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="vintage_card2">
                    <img src={vintage_vase} alt="error" className="vintage_image"/>
                    <div className="vintage_texts2">
                    <h3 className="xxxl_body_text vintage_heading2">LARGE TERRACOTA VASE</h3>
                    <span>
                    <button className="primary_button sale_button">VIEW DETAILS</button>
                    </span>
                    </div>
                </div>
                </SwiperSlide>
            </div>
            </Swiper>
        </div>
        </>
    )
}
export default Vintage_chair;