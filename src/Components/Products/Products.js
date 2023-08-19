import React from 'react';
import './Products.css';
import { data } from '../../Data';

function Products(){
    return(
        <>
        <div className='product-container'>
            <div className='product-con-product-item'>
                <img src={data[3].url} alt="product-firt-item" className='product-con-header-img'/>
                <div className='product-con-first-header-div'>
                    <h1>{data[3].name}</h1>
                    <p>{data[3].cag}</p>
                    <p><span>₹</span> {data[3].price}</p>
                    <div className='product-but-and-add-btns'>
                    <button>Buy Now</button>
                    <button>Add To Cart</button>
                </div>
                </div> 
            </div>
            <div className='realted-products-con'>
                <h1>Related Items</h1>
            </div>
            <div className='products-all-con'>
            {
            data.map((product)=>{
                return(
                    < div className='each-product-card' key={product.id} >
                    <img src={product.url} alt="src-data-all" className='product-mages' />
                    <div className='product-con-card-header-div'>
                    <h1>{product.name}</h1>
                    <p>{product.cag}</p>
                    <p><span>₹</span> {product.price}</p>
                    <div className='product-card-and-add-btns'>
                    <button>Add To Cart</button>
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

export default Products;