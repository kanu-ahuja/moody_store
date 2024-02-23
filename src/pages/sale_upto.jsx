import React from "react";
import sale_image from "../image/hero_image.png"

const Sale_upto = ()=>{
    return(
        <>
        <section  className="sale_upto">
            <div className="container">
                <div className="sale_collection">
                    <div>
                        <img src={sale_image} alt="error" className="sale_image"/>
                    </div>
                    <div className="hero_text">
                        <h3 className="hero_heading">HOT DEALS THIS WEEK</h3>
                        <p className="hero_bigtext">SALE UP 50% MODERN FURNITURE</p>
                        <div>
                            <button className="primary_button sale_button">VIEW NOW</button>
                        </div>
                    </div>
                    </div>
            </div>
            </section>
        </>
    )
}
export default Sale_upto;