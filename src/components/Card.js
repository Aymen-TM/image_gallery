import React from 'react'


function Card({image}) {
    const tags = image.tags.split(',')
  return (
    <div className='max-w-sm  bg-white rounded-lg shadow-lg '>
       <img src={image.webformatURL} alt="cat" className='w-full' />
       <div className='px-6 py-4 text-xl'>
           {image.user}
       </div>
           <ul className='px-6'>
               <li><strong>Views:</strong>{image.views}</li>
               <li><strong>Downlaods:</strong>{image.downloads}</li>
               <li><strong>Likes:</strong>{image.likes}</li>
           </ul>
           <div className='px-6 py-4'>
               {
                   tags.map((tag,index) =>(
                    <span key={index} className='inline-block rounded-full mr-2 bg-gray-300 px-3 py-1 text-sm text-gray-700 font-semibold'>
                    {tag}
                    </span>
                   ))
               }
               
           </div>
    </div>
  )
}

export default Card