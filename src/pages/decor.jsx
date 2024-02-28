import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Decor = ()=>{
    const decor_page = [
        {
            image : "image1.png",
            heading : "DECOR",
        },
        {
            image : "image2.png",
            name : "Linen Beach Towel",
            icon : "decor_icon.svg",
            price : "$30",
        },
        {
            image : "image3.png",
            name : "Square Clear Glass Box",
            icon : "decor_icon.svg",
            price : "$30",
        },
        {
            image : "image4.png",
            name : "4-pack Small Ceramic Plates",
            icon : "decor_icon.svg",
            price : "$30",
        },
        {
            image : "image5.png",
            name : "Large Clear Glass Box",
            icon : "decor_icon.svg",
            price : "$30",
        },
        {
            image : "image6.png",
            name : "Round Jute Placemat",
            icon : "decor_icon.svg",
            price : "$30",
        },
        {
            image : "image7.png",
            name : "Metal Wire Basket",
            icon : "decor_icon.svg",
            price : "$30",
        },
        {
            image : "image8.png",
            heading : "BOHO CHIC",
        },
    ]
        return(
            <>
            <section className="container">
                <div className="decor_page">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    1100: {
                        slidesPerView: 4,
                    },
                    700: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 1.5,
                    },

                    391: {
                        slidesPerView: 1,
                    },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
           >
                        {
                            decor_page.length>0 && decor_page.map((item,index)=>{
                                return(
                                    index===0 ?
                                    <SwiperSlide>
                                        <div>
                                            <img src={require(`../image/${item?.image}`)} className="decor_img" alt="error"/>
                                            <div className="decor_texts">
                                                <h3 className="xxxl_body_text">{item.heading}</h3>
                                                <p className="lg_body_text decor_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <span>
                                                   <button className="primary_button sale_button">VIEW ALL</button>
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    :
                                    index===7 ?
                                    <SwiperSlide>
                                        <div>
                                            <img src={require(`../image/${item?.image}`)} className="decor_img" alt="error"/>
                                            <div className="decor_texts">
                                                <h3 className="xxxl_body_text">{item.heading}</h3>
                                                <p className="lg_body_text decor_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <span>
                                                   <button className="primary_button sale_button">VIEW ALL</button>
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    :
                                    <SwiperSlide>
                                        <div>
                                            <img src={require(`../image/${item?.image}`)} className="decor_img" alt="error"/>
                                            <h2 className="xl_body_text">{item?.name}</h2>
                                            <img src={require(`../image/${item?.icon}`)} className="decor_icon" alt="error"/>
                                            <h2 className="xxl_body_text decor_price">{item?.price}</h2>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
              </Swiper>
              </div>
              </section>
            </>
        )
}
export default Decor;
