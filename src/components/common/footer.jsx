import React from "react";
import footer_img1 from "../../image/facebook.svg"
import footer_img2 from "../../image/twitter.svg"
import footer_img3 from "../../image/instagram.svg"
import footer_img4 from "../../image/youtube.svg"

const Footer = ()=>{
    return(
        <>
           <div className="footer_section">
                <div className="container">
                    <div className="footer_page">
                        <div className="mobile_section">
                        <div className="footer_left">
                            <h1 className="xxxl_body_text">URBAN OUTFITTERS</h1>
                            <p className="footer_desc lg_body_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <span className="footer_address">
                                <h2 className="lg_body_text">121 king street, Melbourne 3000</h2>
                                <a href="tal:+61 3 8376 6284" className="footer_contact lg_body_text">+61 3 8376 6284</a>
                                <a href="mailto:contact@urbanoutfitters.com" className="footer_contact lg_body_text">contact@urbanoutfitters.com</a>
                            </span>
                            
                       </div>
                       <div className="social_media">
                                <img src={footer_img1} alt="error" />
                                <img src={footer_img2} alt="error" />
                                <img src={footer_img3} alt="error" />
                                <img src={footer_img4} alt="error" />

                            </div>
                       </div>
                       <div className="header_mobile">
                           <h2 className="lg_body_text cards_items">SHOPPING</h2>
                           <ul className="footer_cards">
                                <li className="md_body_text card_item">Your cart</li>
                                <li className="md_body_text card_item">Your orders</li>
                                <li className="md_body_text card_item">Compared items</li>
                                <li className="md_body_text card_item">Wishlist items</li>
                                <li className="md_body_text card_item">Shipping detail </li>
                           </ul>
                       </div>
                        
                       <div className="header_mobile">
                       <h2 className="lg_body_text cards_items">MORE LINK</h2>
                           <ul className="footer_cards card_item">
                                <li className="md_body_text">Blog</li>
                                <li className="md_body_text">Gift Center</li>
                                <li className="md_body_text">Buying Guides</li>
                                <li className="md_body_text">New Arrivals</li>
                                <li>Clearance</li>
                           </ul>
                       </div>
                       <div className="header_mobile mobile_heading">
                            <h2 className="lg_body_text cards_items">FROM THE BLOG</h2>
                            <div className="footer_right">
                            <div className="card_item">
                            <span className="footer_date"> 
                                <h3 className="xxl_body_text">26</h3>
                                <h4 className="md_body_text footer_month">May</h4>
                            </span>
                            <p className="footer_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <h3 className="md_body_text footer_comments">3 comments</h3>
                            </div>
                            <div className="footer_divider">
                                
                            </div>
                            <div className="card_item">
                            <span className="footer_date"> 
                                <h3 className="xxl_body_text">27</h3>
                                <h4 className="md_body_text footer_month">May</h4>
                            </span>
                            <p className="footer_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <h3 className="md_body_text footer_comments">3 comments</h3>
                            </div>
                            </div>
                       </div>
                    </div>

                </div>
            </div>
            <div className="footer_end">
                    <h4 className="md_body_text footer_last">Urban Outfitters © - All rights reserved </h4>
            </div>
        </>
    )
}
export default Footer;