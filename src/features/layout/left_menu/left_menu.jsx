import './left_menu.css'
import { useState } from 'react';

export function LeftMenu({ className = '' }) {
  const [categories, setCategories] = useState(fixedCategories)

  function findItem(value, item) {
    if (item?.name.includes(value)) return item
    if (item?.children)
      for(let i of item?.children) {
        const result = findItem(value, i)
        if (result) return result
      }
  }

  function toggleExpand(item) {
    let newCategories = [...categories]
    const existedItem = findItem(item.name, newCategories[0])
    existedItem.expanded = existedItem.children?.length && !existedItem.expanded
    setCategories(newCategories)
  }

  function renderItem(item, index) {
    return <div key={item.name} className='item'>
      <div onClick={()=>toggleExpand(item, index)}>
        {
          item.children?.length &&
          (item.expanded
          ? <svg width="12" height="8" viewBox="0 0 12 8">
            <path d="M1.41 -7.62939e-08L6 4.59L10.59 -7.62939e-08L12 1.42L6 7.42L0 1.42L1.41 -7.62939e-08Z" fill="#2264D1"/>
          </svg>        
          : <svg width="8" height="12" viewBox="0 0 8 12">
            <path d="M0.295002 2.11499L4.875 6.70499L0.295002 11.295L1.705 12.705L7.705 6.70499L1.705 0.704987L0.295002 2.11499Z" fill="#76A9FF"/>
          </svg>)
        }
        <span className={item.expanded ? 'active' : 'inactive'}>{item.name}</span>
      </div>
      {item.expanded && item.children?.map(renderItem)}
    </div>
  }

  return (
    <div className={`left-menu ${className}`}>
      <button className='departments'>
        <svg width='16' height='10' viewBox='0 0 18 12'>
          <path d='M3 7H15V5H3V7ZM0 0V2H18V0H0ZM7 12H11V10H7V12Z' fill='currentColor' />
        </svg>
        <div className='text'>Departments</div>
      </button>
      <div className='left-menu-categories'>
        {categories.map(renderItem)}
      </div>
    </div>
  )
}

const fixedCategories = [
  {
    name: 'All Categories',
    expanded: true,
    children: [
      {
        name: 'Electronics',
        children: [
          {
            name: 'Cell Phones & Smartphones',
            children: [
              {
                name: 'Cell Phone Accessories',
              },
              {
                name: 'Cell Phone Gatgets',
              },
              {
                name: 'Applications',
              },
              {
                name: 'Smart Watches',
              },
              {
                name: '...',
              },
            ]
          }
        ]
      },
      {
        name: 'Business & Industrial',
      }
    ]
  },
]