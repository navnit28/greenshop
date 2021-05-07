import React, { PureComponent } from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
export class Subtotal extends PureComponent {
    render() {
        return (
            <div className="subtotal">
                <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal (0 items):<strong>0</strong>
                    </p>
                    


                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
                />
                <button>
                    proceed to checkout
                </button>
            </div>
        )
    }
}

export default Subtotal
