import React,{useState} from 'react';
import './Addproduct.css';
import { ImagetoBase64 } from '../../ImagetoBase64';
import {homedata} from '../../Homedata';
import DeleteIcon from '@mui/icons-material/Delete';

function Addproducts(){
    const [selectedCategory, setSelectedCategory] = useState('');
    const [usedataset,setData]=useState(null);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setData((prev)=> {
            return {
                ...prev,
                cag:selectedCategory
            }

        })
    };

    const categories = ['fruits', 'vegetable', 'Home Appliances', 'rice', 'cake','burger','icream','pizza','dosa','panner','sandwich'];

    const handleUploadProfileImage = async(e)=>{
        const data = await ImagetoBase64(e.target.files[0])
    
  
        setData((preve)=>{
            return{
              ...preve,
              url : data
            }
        })
  
    }

   function  onsubmitform(e){
    e.preventDefault();
    console.log("all data is :", usedataset);
   }

    return(
        <>
        <div className='Addproducts-header'>
            <h1>Add-products</h1>
            <p>Welcome to the Add Products page! This is 
            where you can effortlessly showcase your products
             for selling. Our platform empowers you to present 
             your items to a wide audience of potential buyers. 
             However, do remember that we've implemented a 
             category-based selling approach. This means that you 
             can list products belonging to specific categories 
             that align with our marketplace's offerings. This 
             approach ensures that your products are well-suited 
             to our audience, enhancing your selling experience 
             and connecting you with the right customers. Start a
             dding your products now and tap into a world of selling possibilities!</p>
        </div>
        <div className='addproduct-upload-con'>
            <h1>Upload Products</h1>
            
            <div className='addproduct-upload-form'>
                <div>
                    <label>name:</label>
                    <input type='text' placeholder='Enter name of the product' onChange={(e)=>setData((prev)=>{
                        return{
                            ...prev,
                            name:e.target.value
                        }
                    })}/>
                </div>
                <div>
                    <label>Select category:</label>
                    <select  id="category" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Select a category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                            {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Price:</label>
                    <input type='number' placeholder='Enter you price in number' onChange={(e)=>setData((prev)=>{
                        return{
                            ...prev,
                            price:e.target.value
                        }
                    })}/>
                </div>
                <div>
                    <label>uploade-img:</label>
                    <input type='file' accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea placeholder='write about that content' onChange={(e)=>setData((prev)=>{
                        return{
                            ...prev,
                            des:e.target.value
                        }
                    })}/>
                </div>
                <button onClick={(e)=>onsubmitform(e)}>Submit</button>
            </div>

        </div>
        <div className='addproducts-display-products'>
            <h1>added products</h1>
            <div className='Addedproduct-display-container'>
        <div className='Addedproduct-con-each-all-cart'>
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
                        </div>
                    </div>
                )
            })
        }

                 </div>
             </div>
        </div>
        </>
    );
}

export default Addproducts;