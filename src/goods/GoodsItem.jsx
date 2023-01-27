import React from 'react'
import './Goods.css'

function GoodsItem({mainId,displayAssets,displayName,displayDescription,price,getOrder=Function.prototype}) {

   const imageBackground = displayAssets.map((img) =>  img.full_background);
const regularPrice=price.regularPrice





 return (
<div className="card">
			<div className="card small">
				<img src={imageBackground} alt="" />
			</div>
			<div className="card-content">
				<span className="card-title">{displayName}</span>
				<p>{displayDescription}</p>
			</div>
			<div className="card-action">
				<button className="btn #5e35b1 deep-purple darken-1 set-btn" onClick={()=> getOrder({mainId,displayName,regularPrice,imageBackground})} >
					Купить
				</button>
				<span className="right price">{regularPrice} Руб.</span>
			</div>
		</div>
  )
}

export default GoodsItem
