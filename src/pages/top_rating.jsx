import React from "react";

const Top_rating = () =>{

    const rating = [
        {
            image : "top_rating1.png",
            heading : "Tray with Foot",
            icon : "stars_rating.svg",
            price : "30$",
        },
        {
            image : "top_rating2.png",
            heading : "Twill Seat Cushion",
            icon : "stars_rating.svg",
            price : "30$",
            
        },
        {
            image : "top_rating3.png",
            heading : "Fluted Beverage Glass",
            icon : "stars_rating.svg",
            price : "30$",
        },
        {
            image : "top_rating4.png",
            heading : "Ceramic Egg Cup",
            icon : "stars_rating.svg",
            price : "30$",
        },
        {
            image : "top_rating5.png",
            heading : "Small Bamboo Box",
            icon : "stars_rating.svg",
            price : "30$",
            
        },
        {
            image : "top_rating6.png",
            heading : "Metal Cutlery Basket",
            icon : "stars_rating.svg",
            price : "30$",
            
        },
        {
            image : "top_rating7.png",
            heading : "4-pack Ceramic Cups",
            icon : "stars_rating.svg",
            price : "30$",
            
        },
        {
            image : "top_rating8.png",
            heading : "2-pack Linen Napkins",
            icon : "stars_rating.svg",
            price : "30$",
            
        },
        {
            image : "top_rating9.png",
            heading : "Glazed Stoneware Plate",
            icon : "stars_rating.svg",
            price : "30$",
        },
    ]
    
    return(
        <div className="container">
            <div className="top_rating">
                <h2 className="rating_heading">TOP RATING</h2>
                <div className="rating_cards">
                    {
                         rating.length > 0 && rating.map((item,index)=>{
                           return(
                                <>
                                    <div className="rating_item">
                                        <img src={require(`../image/${item?.image}`)} alt="error"/>
                                        <div className="rating_texts">
                                            <h3 className="xl_body_text rating_image">{item?.heading}</h3>
                                            <img src={require(`../image/${item?.icon}`)} alt="error"/>
                                            <h4 className="xxl_body_text">{item?.price}</h4>
                                        </div>
                                    </div>
                                </>
                           )
                        })  
                    }
                </div>
            </div>
        </div>
    )
}
export default Top_rating;