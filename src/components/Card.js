import React from 'react'
import { animate, motion } from "framer-motion"


function Card({image}) {
    const variants ={
        initial:{
            scale:0.2
        },
        animate:{
            scale:1,
            
        },
        
    }
    const tags = image.tags.split(',')
  return (
    <motion.div
    whileHover={{scale:1.1}}
    variants={variants}
    initial='initial'
    animate='animate'
    transition={{type:'tween',duration:0.5,ease:'linear'}}
    className='max-w-sm  bg-white rounded-lg shadow-lg cursor-pointer'>
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
    </motion.div>
  )
}

export default Card