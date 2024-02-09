import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'


const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "select",
        new_price: "",
        old_price: ""
    })

    const image_handler = (e) => {
        setImage(e.target.files[0]);
    }


    const changeHandlere=(e) => {
        setProductDetails({...productDetails, [e.target.name]:e.target.value})
    }


    const addproduct = async () => {
        console.log(productDetails)

        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => {responseData=data})

        if(responseData.success) 
        {
            product.image = responseData.image_url;
            console.log(product)

            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(product),

            }).then((resp) => resp.json()).then((data) => {
                data.success?alert("Product Added"):alert("Failed To Add")
            })
        }
    }



  return (
    <div className="addproduct">
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={productDetails.name} onChange={changeHandlere} type="text" name='name' placeholder='Type Here'/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandlere} type="text" name='old_price' placeholder='Type Here'/>
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandlere} type="text" name='new_price' placeholder='Type Here'/>
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandlere} name="category" className='addproduct-selector'>
                <option value="select">Select </option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image ? URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt="" />
            </label>
            <input onChange={image_handler} type="file" name='image' id='file-input' hidden/>
        </div>
        <button onClick={addproduct} className='addproduct-btn'>Add Product</button>
    </div>
  )
}

export default AddProduct