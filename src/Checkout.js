import React from 'react'
import ad from "./ad.jpg"
import Subtotal from "./Subtotal.js"
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
function Checkout() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={ad}/>
                <div >
                    <h2 className="checkout__title">Your shopping basket</h2>

                    {
                        basket.map(item =>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))
                    }
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
