import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFiler] = useState(false)

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* FILTER OPTION */}
      <div className="min-w-60">
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'> 
          FLITERS
          <img className={`pl-1 h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* CATEGORY FLITER */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'kids'} /> kids
            </p>
          </div>
        </div>
        {/* SUBCATEGORY FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} /> Top wears
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwaer'} /> Botton wears
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} /> Winter wears
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Collection
