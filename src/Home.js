import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://image.shutterstock.com/image-photo/european-guy-face-mask-holds-260nw-1709093539.jpg"/>
            <div className="home__row">
                <Product 
                    id ="1"
                    title="First Skateboard"
                    price={2009} 
                    image="data:image/jpeg;base64,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"
                    rating={5}
                />
                <Product
                    id="2" 
                    title="Second Skateboard (for kids) this is product is made in England and is bestseller among all"
                    price={3400} 
                    image="https://rukminim1.flixcart.com/image/416/416/khuvxjk0-0/skateboard/i/p/k/captain-america-toy-for-your-child-mini-skateboard-finger-board-original-imafxs3brecsygn7.jpeg?q=70"
                    rating={5}
                />
                <Product 
                    id="3"
                    title="Third Skateborad"
                    price={3400} 
                    image="https://4.imimg.com/data4/PQ/HP/MY-11548788/skate-board-250x250.jpg"
                    rating={4}
                />
                {/*product*/}
                </div>
                <div className="home__row">
                <Product 
                    id="4"
                    title="Fourth Skateboard"
                    price={3400} 
                    image="https://media.gettyimages.com/photos/close-up-of-skateboard-over-white-background-picture-id897102550?s=612x612"
                    rating={2}
                />
                 <Product 
                    id="5"
                    title="Fifth Skateboard"
                    price={3448} 
                    image="https://rukminim1.flixcart.com/image/416/416/k391w280/skateboard/y/z/h/plastic-skating-board-skate-board-orange-1168-red-67-novicz-20-original-imafdzvy4nqpdkvg.jpeg?q=70"
                    rating={2}
                />
                <Product 
                    id="6"
                    title="Six Skateboard"
                    price={7443} 
                    image="https://contents.mediadecathlon.com/p1479229/421x0/5cr4/oxelo-skate.jpg?k=320afeaf4b094c9fa53bd102fb4e7771"
                    rating={2}
                />
                    {/*product*/}
                    {/*product*/}
                </div>
                <div className="home__row">
                    {/*product*/}
                    <Product 
                    id="7"
                    title="Seventh Skateboard"
                    price={3400} 
                    image="https://store-images.s-microsoft.com/image/apps.10291.9007199266245734.6a04130d-b611-4f49-b546-ef22b5936b95.7017db36-696a-44d0-8a5d-a817e66d9b0b"
                    rating={3}
                />
                </div>
            </div>
        </div>
    )
}

export default Home
