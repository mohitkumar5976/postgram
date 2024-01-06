import React from 'react'
import ImageComponent from '../../../Utilities/ImageComponent'
import { Link } from 'react-router-dom'

const SearchList = ({data}) => {
  return<>
  <Link to={`/user/profile/${data._id}`}>
 <div className='my-2 ml-3 mr-1 '>
 <div className="flex items-center">
  <div className="w-12 h-12 sm:w-24 sm:h-24">
    <ImageComponent photo={data.photo} />
  </div>
  <p className="text-md pl-3 sm:text-2xl">{data.name}</p>
</div>
 </div>
  </Link>
  </> 
  
}

export default SearchList