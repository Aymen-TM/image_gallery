import React, { useState } from 'react'

function Search({searchText}) {
    const [text, setText] = useState('')
    function onsubmit(e){
        e.preventDefault();
        searchText(text);
    }

return (
<div className='max-w-sm py-10 mx-auto'>
    <form onSubmit={onsubmit}>
        <div className="flex items-center border-b border-b-2
   border-teal-500 py-2">
            <input onChange={(e)=>setText(e.target.value)} className="appearance-none bg-transparent border-none w-full
   text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image..." />
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700
   border-teal-500 hover:border-teal-700 text-sm border-4 text-white
   py-1 px-2 rounded" type="submit" >
                Search
            </button>
        </div>
    </form>
</div>
)
}

export default Search