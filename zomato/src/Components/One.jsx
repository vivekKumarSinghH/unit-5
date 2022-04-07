import React from 'react'

export default function One(props) {
    let {image_url,name,continental,asian,thai,dessert,id,cash,card,upi,review,rating,vote,cost_for_two}=props.data
  return (
    <div className="w-full p-4 m-auto border-red-400 border-2  flex justify-center">
<div className="w-[20%] mx-4">    <img src={image_url}/>
</div>

<div className=" w-[70%] flex justify-around">

<div className="">
<p className="text-4xl font-bold text-red-700">{name}</p>

<p className="text-2xl text-gray-400">
{continental&&<span>Continental,</span>}
{thai&&<span>Thai, </span>}
{dessert&&<span> Dessert, </span>}
{asian&&<span> Asian, </span>}

</p>

<p className="text-xl text-gray-400 ">Cost ₹{cost_for_two } for two</p>

<p>Min ₹ 50 <span>Up to 30 min</span></p>

<p>Accepts 
{cash&&<span>, Cash</span>}
{card&&<span>, Card </span>}
{upi&&<span>, UPI </span>}
only
</p>

</div >

<div className="p-4 text-center">
<span className="bg-green-600  text-white text-2xl px-2">{rating}</span>
<p><span>{vote}</span>
 votes</p>
<p><span>{review}</span> reviews</p>
</div>

</div>
    </div>
  )
}
