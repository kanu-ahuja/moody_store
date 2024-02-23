import React from "react";
import image1 from "../image/image1.png"
import image8 from "../image/image8.png"

const Decor = ()=>{
    const decor_page = [
        // {
        //     image : "image1.png",
        // },
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
        }
    ]
        return(
            <>
            <section className="container">
              <div className="decor_page">
                        <div>
                            <img src={image1} />
                        </div>
                        {
                            decor_page.length>0 && decor_page.map((item,index)=>{
                                return(
                                    <>
                                    
                                        <div>
                                            <>
                                                <img src={require(`../image/${item?.image}`)} className="decor_img" alt="error"/>
                                                <h2 className="xl_body_text">{item?.name}</h2>
                                                <img src={require(`../image/${item?.icon}`)} className="decor_icon" alt="error"/>
                                                <h2 className="xxl_body_text decor_price">{item?.price}</h2>
                                            </>
                                        </div>
                                    </>
                                )
                                
                            })
                        }
                        <div>
                            <img src={image8} className="decor_img8"/>
                            <div className="decor_texts">
                                <h3 className="xxxl_body_text">BOHO CHIC</h3>
                                <p className="lg_body_text decor_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <span>
                                <button class="primary_button sale_button">VIEW NOW</button>
                                </span>
                            </div>
                        </div>
              </div>
              </section>
            </>
        )
}
export default Decor;