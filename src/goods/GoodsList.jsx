import React from 'react'
import './Goods.css'
import Basketitem from './GoodsItem'

function GoodsList({goods=[],getOrder}) {

const getGoods= goods.map(el=><Basketitem key={el.mainId} {...el} getOrder={getOrder}/>)

   return (
    <div className='goodslist'>
      {getGoods}
    </div>
  )
}

export default GoodsList
