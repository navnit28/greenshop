import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
            <div className="home__row">
                <Product 
                    id ="1"
                    title="First painting"
                    price={2009} 
                    image="https://orias.berkeley.edu/sites/default/files/styles/openberkeley_image_full/public/general/elementsofthekohbar.jpg?itok=ZRW6VZrD&timestamp=1530642392"
                    rating={5}
                />
                <Product
                    id="2" 
                    title="Second painting"
                    price={3400} 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixjtDLgJDKBtg7VEC-mSG9we5Xq4C2vcUkg&usqp=CAU"
                    rating={5}
                />
                <Product 
                    id="3"
                    title="Third painting"
                    price={3400} 
                    image="https://cpimg.tistatic.com/05912413/b/4/Mithila-Painting.jpg"
                    rating={4}
                />
                {/*product*/}
                </div>
                <div className="home__row">
                <Product 
                    id="4"
                    title="Fourth painting"
                    price={3400} 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZ-moGp5KpcRPmWkR4KZJMRSkmsxfDp7z9g&usqp=CAU"
                    rating={6}
                />
                    {/*product*/}
                    {/*product*/}
                </div>
                <div className="home__row">
                    {/*product*/}
                    <Product 
                    id="5"
                    title="Fifth painting"
                    price={3400} 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAv9fKRF1Rw0T4e8TZH6VUE0hhMCEss0-BGA&usqp=CAU"
                    rating={2}
                />
                </div>
            </div>
        </div>
    )
}

export default Home
