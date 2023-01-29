import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/context'
import './Goods.css'
import Basketitem from './GoodsItem'

function GoodsList() {

   const {getOrder,goods=[]}=useContext(ShopContext)

const getGoods= goods.map(el=><Basketitem key={el.mainId} {...el} getOrder={getOrder}/>)

   return (
    <div className='goodslist'>
      {getGoods}
    </div>
  )
}

export default GoodsList
