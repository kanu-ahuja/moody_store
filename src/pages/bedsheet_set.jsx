import React from "react";
import Bedsheet_img from "../image/bedsheetset.png"

const Bedsheet_set = ()=>{
return(
    <>
        <div>
            <img src={Bedsheet_img} className="bedsheet_img" alt="error"/>
            <div className="bedsheet_set">
                    <h3 className="xxxl_body_text  bedsheet_text1">BEDSHEET SETS</h3>
                    <div className="bedsheet_price">
                        <div className="bedsheet_alltext">
                            <span className="bedsheet_offers">
                                <h4 className="xxxl_body_text">$50.00</h4>
                                <del className="bedsheet_discount">$220.00</del>
                            </span>
                            <span>
                                 <p className="lg_body_text bedsheet_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </span>
                            <span>
                                <button class="primary_button sale_button">VIEW DETAILS</button>
                            </span>
                        </div>
                    </div>
            </div>
        </div>
    </>
)
}
export default Bedsheet_set;