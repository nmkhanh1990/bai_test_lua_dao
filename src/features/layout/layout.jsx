import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { LeftMenu } from './left_menu/left_menu';
import { DataView } from './../../components/data_view/data_view';
import { fetchAsync } from './../../components/data_view/data_view_slice';

import './layout.css'

import searchSVG from '../../assets/icons/search.svg'
import logoSVG from '../../assets/icons/logo.svg'
import avatarPNG from '../../assets/images/avatar.png'


export function Layout() {
  const [activeCatIdx, setActiveCatIdx] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsync('https://63a48936821953d4f2b7793d.mockapi.io/api/products?page=1&limit=12'))
  }, [])
  
  const search = debounce((e) => {
    dispatch(fetchAsync(`https://63a48936821953d4f2b7793d.mockapi.io/api/products?page=1&limit=12&search=${e.target.value}`))
  }, 600)

  function clickCategory(name, index) {
    dispatch(fetchAsync(`https://63a48936821953d4f2b7793d.mockapi.io/api/products?page=1&limit=12&search=${name}`))
    setActiveCatIdx(index)
  }

  return <div className="layout">
    <header className='flex'>
      <img src={logoSVG} alt='logo' />
      <div className='search flex h-center flex-1'>
        <div className='input-wrapper'>
          <img src={searchSVG} alt='search' />
          <input placeholder='search here' onChange={search}/>
        </div>
      </div>
      <div className='user'>
        <button className='sign-in'>Sign in</button>
        <button className='my-cart shadow'>My cart <div className='number'>5</div></button>
        <img className='avatar' src={avatarPNG} alt='avatar' />
      </div>
    </header>
    <main className='flex column flex-1'>
      <div className='categories'>
        {categories.map((cate, index) => {
          const className = `item ${activeCatIdx === index ? 'active' : ''}`
          return <div key={cate.name} className={className} onClick={() => clickCategory(cate.name,index)}>
            {cate.icon}
            {cate.name}
          </div>
        })}
      </div>
      <div className='body flex flex-1'>
        <LeftMenu className='flex-1'/>
        <div className='container flex-4'>
          <DataView/>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
}

const categories = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.76 14.34H18.75C19.5 14.77 20 15.58 20 16.5C20 17.163 19.7366 17.7989 19.2678 18.2678C18.7989 18.7366 18.163 19 17.5 19H2.5C1.83696 19 1.20107 18.7366 0.732233 18.2678C0.263392 17.7989 0 17.163 0 16.5C0 15.58 0.5 14.77 1.25 14.34H1.24L9 9.86C9 9.86 9 9 10 8C11 8 12 7.1 12 6C12 5.46957 11.7893 4.96086 11.4142 4.58579C11.0391 4.21071 10.5304 4 10 4C9.46957 4 8.96086 4.21071 8.58579 4.58579C8.21071 4.96086 8 5.46957 8 6H6C6 4.93913 6.42143 3.92172 7.17157 3.17157C7.92172 2.42143 8.93913 2 10 2C11.0609 2 12.0783 2.42143 12.8284 3.17157C13.5786 3.92172 14 4.93913 14 6C14 7.86 12.73 9.42 11 9.87L18.76 14.34ZM2.5 17H17.5C17.67 17 17.84 16.91 17.93 16.75C18.07 16.5 18 16.21 17.75 16.07L10 11.59L2.25 16.07C2 16.21 1.93 16.5 2.07 16.75C2.16 16.91 2.33 17 2.5 17Z" />
    </svg>,
    name: 'Clothing and Shoes',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 7H14V5H16V7ZM16 11H14V9H16V11ZM16 15H14V13H16V15ZM6 7H4V5H6V7ZM6 11H4V9H6V11ZM6 15H4V13H6V15ZM16 1V3H14V1H6V3H4V1H2V19H4V17H6V19H14V17H16V19H18V1H16Z" fill="currentColor" />
    </svg>,
    name: 'Entertainment'
  },
  {
    icon: <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0V12.5C19 13.4283 18.6313 14.3185 17.9749 14.9749C17.3185 15.6313 16.4283 16 15.5 16C14.5717 16 13.6815 15.6313 13.0251 14.9749C12.3687 14.3185 12 13.4283 12 12.5C12 11.5717 12.3687 10.6815 13.0251 10.0251C13.6815 9.36875 14.5717 9 15.5 9C16.04 9 16.55 9.12 17 9.34V3.47L7 5.6V14.5C7 15.4283 6.63125 16.3185 5.97487 16.9749C5.3185 17.6313 4.42826 18 3.5 18C2.57174 18 1.6815 17.6313 1.02513 16.9749C0.368749 16.3185 0 15.4283 0 14.5C0 13.5717 0.368749 12.6815 1.02513 12.0251C1.6815 11.3687 2.57174 11 3.5 11C4.04 11 4.55 11.12 5 11.34V3L19 0Z" fill="currentColor"/>
    </svg>,
    name: 'Music'
  },
  {
    icon: <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.7025 11.6025L0.9825 10.8925C0.2125 10.1125 0.2125 8.8525 0.9825 8.0725C1.7825 7.2825 3.0425 7.2825 3.8225 8.0725L6.4025 10.6425L10.6425 6.4025L8.0725 3.8225C7.2825 3.0425 7.2825 1.7825 8.0725 0.9825C8.8525 0.2125 10.1125 0.2125 10.8925 0.9825L11.6025 1.7025L17.2625 7.3625L17.9825 8.0725C18.7525 8.8525 18.7525 10.1125 17.9825 10.8925C17.1825 11.6825 15.9225 11.6825 15.1425 10.8925L12.5625 8.3225L8.3225 12.5625L10.8925 15.1425C11.6825 15.9225 11.6825 17.1825 10.8925 17.9825C10.1125 18.7525 8.8525 18.7525 8.0725 17.9825L7.3625 17.2625L1.7025 11.6025ZM0.6425 16.9025L1.7025 15.8425L0.2925 14.4325C-0.0975001 14.0425 -0.0975001 13.4125 0.2925 13.0225C0.6825 12.6325 1.3125 12.6325 1.7025 13.0225L5.9425 17.2625C6.3325 17.6525 6.3325 18.2825 5.9425 18.6725C5.5525 19.0625 4.9225 19.0625 4.5325 18.6725L3.1225 17.2625L2.0625 18.3225L0.6425 16.9025ZM16.9025 0.6425L18.3225 2.0625L17.2625 3.1225L18.6725 4.5325C19.0625 4.9225 19.0625 5.5525 18.6725 5.9425C18.2825 6.3425 17.6525 6.3425 17.2625 5.9425L13.0225 1.7025C12.6325 1.3125 12.6325 0.6825 13.0225 0.2925C13.4125 -0.0975001 14.0425 -0.0975001 14.4325 0.2925L15.8425 1.7025L16.9025 0.6425Z" fill="currentColor"/>
    </svg>,
    name: 'Sport & Lifestyle'
  },
  {
    icon: '',
    name: 'Pets'
  },
  {
    icon: '',
    name: 'Kitchen Accessories'
  },
  {
    icon: '',
    name: 'Travel Equipment'
  },
  {
    icon: '',
    name: 'Growing & Garden'
  },
  {
    icon: '',
    name: 'Electrical Tools'
  },
  {
    icon: '',
    name: 'Mother Care'
  },
  {
    icon: '',
    name: 'Toys & Entertainment'
  },
  {
    icon: '',
    name: 'Vintage'
  },
]