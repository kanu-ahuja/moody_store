import React from "react"

const decor_page = [
    {
        id : 1,
        image : "image1.png",
        heading : "DECOR",
    },
    {
        id : 2,
        image : "image8.png",
        heading : "BOHO CHIC",
    }      
]
const Decor_card = ()=>{
    return(
        <>
        {
            
            decor_page.map((item,index)=>{
                return(
                <div>
                    <img src={require(`../image/${item?.image}`)} className="decor_image" alt="error"/>
                    <div className="decor_texts">
                        <h3 className="xxxl_body_text">{item.heading}</h3>
                        <p className="lg_body_text decor_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <span>
                            <button className="primary_button sale_button">VIEW ALL</button>
                        </span>
                    </div>
                </div>
                )
            })
        }
        
        </>
    )
}
export default Decor_card;