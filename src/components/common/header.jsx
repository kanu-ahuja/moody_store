import React from "react";
import header_logo1 from "../../image/header_logo1.svg"
import header_logo2 from "../../image/header_logo2.svg"
import header_logo3 from "../../image/header_logo3.svg"
import header_logo4 from "../../image/header_logo4.svg"
import toggle_logo from "../../image/toggle.svg"
import free_shipping from "../../image/free_shipping.svg"
import money_back from "../../image/money_back.svg"
import support from "../../image/support.svg"

const Header = ()=>{
    const header_router = [
        {
            name : "HOME",
        },
        {
            name : "STORE",
        },
        {
            name : "ACCESSORIES",
        },
        {
            name : "BRAND",
        },
        {
            name : "PAGES",
        },
        {
            name : "ABOUT US",
        },
        {
            name : "NEWS",
        },
        {
            name : "CONTACT US ",
        }
    ]
   
    return(
        <>
           <div className="container">
                <div className="header">
                    <div>
                       <h3 className="header_logo xxxl_body_text">MOODY STUDIO</h3>
                    </div>
                    <div className="header_icons">
                        <img src={header_logo1} alt="error" className="mobile_icon"/>
                        <img src={header_logo2} alt="error" />
                        <img src={header_logo3} alt="error" />
                        <img src={header_logo4} alt="error" className="mobile_icon"/>
                        <img src={toggle_logo} alt="error" className="mobile_toggle"/>
                    </div>
                </div>

                <div className="divider"></div>

                    <div className="navbar">
                    {
                        header_router.length > 0 && header_router.map((item, index) => {
                        return (
                            <div className="header_links">
                                <a href='#' className="header_text">{item?.name}</a>
                            </div>
                        )})
                    }
                    </div>

                    <div className="divider"></div>

                    <div className="header_offer">
                        <span className="header_advertisement ">
                            <img src={free_shipping} alt="error"/>
                            <h3 className="sm_body_text">FREE SHIPPING</h3>
                        </span>
                        <span className="header_advertisement">
                            <img src={money_back} alt="error"/>
                            <h3 className="sm_body_text">100% MONEY BACK</h3>
                        </span>
                        <span className="header_advertisement">
                            <img src={support} alt="error"/>
                            <h3 className="sm_body_text">SUPPORT 24/7</h3>
                        </span>
                    </div>
            </div>
        </>
    )
}
export default Header;