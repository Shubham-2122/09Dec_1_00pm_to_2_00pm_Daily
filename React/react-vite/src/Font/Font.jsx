import React from 'react'

function Font() {
    return (
        <div>
            <h1 className='text-2xl font-black text-center'>hello this data</h1>
            <h1 className='text-3xl text-red-600 font-sans underline'>hello this data</h1>
            <h1 className='text-4xl text-green-500 font-serif italic text-left'>hello this data</h1>
            <h1 className='text-5xl line-through decoration-red-200 font-mono text-right'>hello this data</h1>
            <h1 className='text-6xl text-orange-700'>hello this data</h1>
            <h1 className='text-7xl'>hello this data</h1>
            <a href="" className='line-through'>Home page</a>

            <p class="underline decoration-solid">The quick brown fox...</p>
            <p class="underline decoration-double">The quick brown fox...</p>

            <p class="underline decoration-dotted">The quick brown fox...</p>
            <p class="underline decoration-dashed">The quick brown fox...</p>
            <p class="underline decoration-wavy">The quick brown fox...</p>

            <h1 className='text-7xl lowercase'>HELLO DATA</h1>
            <h1 className='text-7xl uppercase'>hello data</h1>
            <h1 className='text-7xl capitalize'>hello date</h1>
        </div>
    )
}

export default Font
