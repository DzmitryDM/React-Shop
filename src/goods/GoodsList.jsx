import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/context'
import './Goods.css'
import Basketitem from './GoodsItem'

function GoodsList({currentGoods}) {

   const {getOrder}=useContext(ShopContext)

const getGoods= currentGoods.map(el=><Basketitem key={el.mainId} {...el} getOrder={getOrder}/>)

   return (
    <div className='goodslist'>
      {getGoods}
    </div>
  )
}

export default GoodsList
