import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                className="home_image"
                src="https://m.media-amazon.com/images/I/81EaJeUwBhL._SX3000_.jpg"
                alt=""
                />
                <div className="home_row">
                    <Product id="2748595" title='Enemy at the Gates' image="https://storage.googleapis.com/du-prd/books/images/9781982164881.jpg" price='399' rating= {4} />
                    <Product id="8478475" title="Amazon Echo 3rd Generation" image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg" price='3500' rating= {5}/>
                </div>
                <div className="home_row">
                    <Product id="87587458" title="boAt Airdopes 441 TWS Ear-Buds with IWP Technology, Immersive Audio" image="https://m.media-amazon.com/images/I/51lEIy51L6L._SL1500_.jpg" price="1700" rating={4}/>
                    <Product id="87587458" title="RSP Luxury Small Multicolor Smokeless Decorated Mini Glass" image="https://m.media-amazon.com/images/I/61s18TkOUNL._SL1000_.jpg" price="385" rating={4}/>
                    <Product id="87587458" title="Vudy Mango Wood Walnut Finish Handmade Carving Classic Side Table for Living Room (Brown)" image="https://m.media-amazon.com/images/I/71nba6EhEzS._SL1500_.jpg" price="1591" rating={5}/>
                </div>
                <div className="home_row">
                    <Product id="87587458" title="SKAFA Carved Wooden Wall Shelves Set of 3 (Brown)" image="https://m.media-amazon.com/images/I/81XFxzm+QHL._SL1200_.jpg" price="797" rating={5}/>
                    <Product id="87587458" title="American Tourister Casual Backpack" image="https://m.media-amazon.com/images/I/91FvDEE9sCL._UL1500_.jpg" price="2949" rating={4}/>
                </div>
            </div>

        </div>
    )
}

export default Home
