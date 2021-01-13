import React from 'react';
import { Card } from 'react-bootstrap';
import './Products.css';

const Products = (props) => {

    const {name, image_gallery, original_price, discounted_amount} = props.data
    const imgUrl = image_gallery[0]?.image_link || "https://s3.ap-south-1.amazonaws.com/cdn-shebadev/images/pos/services/thumbs/default.jpg";
    return (
        <div className="col-md-4 col-sm-6">
            <div class="product-card p-0">
                <img className="card-img" src={imgUrl} alt="Card image cap"/>
                <span className="badge badge-warning">21%</span>
                <div className="card-body p-0">
                    <div className="product-title">
                        <h5 className="product-title ">{name.slice(0,63)}</h5>
                    </div>
        
                    <div className="d-flex price-add-container justify-content-between">
                        <div className='price-disc-container'>
                            <h4>৳ {original_price}</h4>
                            {
                                <h5 style={{textDecoration: "line-through"}}>৳ {original_price}</h5>
                            }
                        </div>
                        {
                            true ?
                            <button className="addBtn">+ Add</button>
                            :
                            <div className="otherBtn">
                                <button className="otherBtn">+</button>
                                <input type="text"/>
                                <button className="otherBtn">-</button>
                            </div>
                        }
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Products;