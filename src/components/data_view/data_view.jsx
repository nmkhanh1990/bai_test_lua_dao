import { useSelector } from 'react-redux';
import { Rating } from './../rating/rating';
import { selectData, selectLoading } from './data_view_slice';

import './data_view.css'

export function DataView({ renderItem=null }) {
  const data = useSelector(selectData)
  const loading = useSelector(selectLoading)

  return (
    <div className='data-view'>
      {
        loading 
        ? <h1>Loading...</h1>
        : data.map((product, index) => {
          const vote = product.product_vote / 10
          return renderItem ? renderItem()
          : (
            <div key={product.id} className='data-item'>
              <div className='info'>
                <img src={product.product_image} alt='' />
                <div>{product.product_name}</div>
                <div className='price'>${product.product_price}</div>
                <div className='description'>{product.product_description}</div>
              </div>
              <div className='flex v-center space-between'>
                <Rating value={vote} />
                <button>Buy now</button>
              </div>
            </div>
          )
      })}
    </div>
  )
}
