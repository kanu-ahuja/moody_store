import React from "react";
import image from "../image/email.svg"
const Sign_up_letter = ()=>{

    return(
        <div className="container">
                <div className="signup_letter">
                    <h3 className="lg_body_text signup_products">LOAD MORE PRODUCTS</h3>
                </div>
                <div className="signup_alltexts">
                    <span className="signup_heading">
                        <h1 className="xxxl_body_text">SIGN UP FOR THE NEWSLETTER</h1>
                        <h3 className="xl_body_text">Subscribe for the latest stories and promotions</h3>
                    </span>
                    <div className="letter_email">
                        <input type="email" placeholder="Enter your e-mail address"/>
                        <div className="signup_email">  
                            <img src={image} alt="error" className="lg_body_text email_text" />
                        </div>
                        </div>
                </div>
        </div>
    )
}
export default Sign_up_letter;