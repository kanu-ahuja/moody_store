import React from "react";
import Bedsheet_img from "../image/bedsheetset.png"


const Bedsheet_set = ()=>{
return(
    <>
        <div>
            <img src={Bedsheet_img} className="bedsheet_img"/>
            <div className="bedsheet_set">
                <div>
                    <h3 className="xxxl_body_text">BEDSHEET SETS</h3>
                    <div className="bedsheet_price">
                        <span>
                            <h4 className="xxxl_body_text">$50.00</h4>
                        </span>
                        <span>
                            <del>$220.00</del>
                        </span>
                    </div>
                    <span>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </span>
                </div>  
            </div>
        </div>
    </>
)
}
export default Bedsheet_set;