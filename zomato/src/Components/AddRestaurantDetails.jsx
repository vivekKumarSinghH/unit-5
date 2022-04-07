import axios from "axios";
import React, { useState } from "react";
import "../index.css"
export default function AddRestaurantDetails() {

    
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    cost_for_two: "",
    vote: "",
    review: "",
    rating: "",  
    card: false,
    upi: false,
    cash: false,
    asian: false,
    thai: false,
    dessert: false,
    continetal: false,
  });


  const handleChange = (e) => {
      if(e.target.checked){
          
   setFormData({...formData,[e.target.id]:e.target.checked})
   return
      }
   setFormData({...formData,[e.target.id]:e.target.value})
};

const handleSub=()=>{
    
    axios.post("http://localhost:3030/restaurants",formData)


    setFormData({
        name: "",
        image_url: "",
        cost_for_two: "",
        vote: "",
        review: "",
        rating: "",
        card: false,
        upi: false,
        cash: false,
        asian: false,
        thai: false,
        dessert: false,
        continetal: false,
      })
  


}


  return (
    <div className=" m-auto  w-[300px] p-10 text-center flex flex-col gap-2">
      <input
        placeholder="Enter the name of restaurant"
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
      ></input>
      <input
        placeholder="Enter the Image URL"
        type="text"
        id="image_url"
        value={formData.image_url}
        onChange={handleChange}
      ></input>
      <input
        placeholder="Enter the Cost for Two"
        type="number"
        id="cost_for_two"
        value={formData.cost_for_two}
        onChange={handleChange}
      ></input>
      <input
        placeholder="Enter number of Votes"
        type="number"
        id="vote"
        value={formData.vote}
        onChange={handleChange}
      ></input>
      <input
        placeholder="Enter number of reviews"
        type="number"
        id="review"
        value={formData.review}
        onChange={handleChange}
      ></input>
      <input
        placeholder="Enter number of rating"
        type="number"
        id="rating"
        value={formData.rating}
        onChange={handleChange}
      ></input>
<label>payment method</label>
<div>
<label className="m-4">Cash</label>
<input type="checkbox" checked={formData.cash} onChange={handleChange} id="cash" />
</div>
<div>
<label className="m-4">Card</label>
<input type="checkbox"  checked={formData.card} onChange={handleChange} id="card" />
</div>
<div>
<label className="m-4">UPI</label>
<input type="checkbox" checked={formData.upi} onChange={handleChange} id="upi" />
</div>



<label>Categories</label>
<div>
<label className="m-4">Asian</label>
<input type="checkbox" checked={formData.asian} onChange={handleChange} id="asian"/>
</div>
<div>
<label className="m-4">Thai</label>
<input type="checkbox" checked={formData.thai}  onChange={handleChange} id="thai"/>
</div>
<div>
<label className="m-4">Dessert</label>
<input type="checkbox" checked={formData.dessert}  onChange={handleChange} id="dessert"/>
</div>
<div>
<label className="m-4">Continental</label>
<input type="checkbox" checked={formData.continetal}  onChange={handleChange} id="continetal"/>
</div>

      <button onClick={handleSub}>Add Restaurant</button>
    </div>
  );
}
