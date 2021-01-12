import React from 'react';
import { Card } from 'react-bootstrap';
import './Products.css';

const Products = (props) => {

    const {name, img, original_price, image_gallery} = props.data
    const imgUrl = image_gallery[0]?.image_link || "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/bulk/jpg/Services/28/600.jpg";
    console.log(imgUrl);
    return (
        <div className="col-md-4">
            <div className="card-container">
                <img className='card-img' src={imgUrl} alt={name}/>
                <h4>{name.slice(0, 25)}</h4>
                <div className="d-flex">
                    <div>
                    <h4 id="price">$ {original_price}</h4>
                    </div>
                    <button className="btn addBtn">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Products;