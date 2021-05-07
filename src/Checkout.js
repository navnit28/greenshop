import React from 'react'
import ad from "./ad.jpg"
import Subtotal from "./Subtotal.js"
import "./Checkout.css"
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={ad}/>
                <div className="checkout__title">
                    Your shopping basket
                    {/*basketitem*/}
                    {/*basketitem*/}
                    {/*basketitem*/}
                    {/*basketitem*/}
                    {/*basketitem*/}
                    </div>
            </div>
            <div className="checkout__right">
              <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
