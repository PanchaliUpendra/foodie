import React from 'react';
import './Addcart.css';
import {homedata} from '../../Homedata';
import DeleteIcon from '@mui/icons-material/Delete';

function Addcart(){
    return(
        <>
        <div className='Addcart-container'>
        <div className='addcart-con-each-all-cart'>
        {
            homedata.map((product) => {
                return(
                    <div className='addcart-con-each-cart5'key={product.id}>
                        <img src={product.url} alt='product-content' className="addcart-each-img"/>
                        <div className='addcart-con-inside-div-part'>
                            <div className='addcart-con-each-cart-header'>
                            <h1>{product.name}</h1>
                            <DeleteIcon fontSize='medium'/>
                            </div>
                            <p>{product.cag}</p>
                            <p className='price-para-in-add-product'><span>₹</span>{product.price}</p>
                            <div className='in-de-total-price-addcart'>
                                <div className='increase-decrease-product-item'>
                                    <p>+</p>
                                    <h2>1</h2>
                                    <p>-</p>
                                </div>
                                <div>
                                    <p>Total:<span>₹</span>99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        </div>
        </div>
        </>
    );
}

export default Addcart;