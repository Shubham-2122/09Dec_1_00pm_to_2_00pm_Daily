import React from 'react'

function Flex() {
    return (
        <div>

            {/* <div className="md:flex">
            <div className="sm:w-1/2 md:w-1/4 border-2">1</div>
            <div className="sm:w-1/2 md:w-1/4 border-2">2</div>
            <div className="sm:w-1/2 md:w-1/4 border-2">1</div>
            <div className="md:w-1/4 border-2">2</div>
        </div> */}

            <div className='flex flex-wrap justify-center gap-1'>
                <div className="size-52 border-2 hover:bg-red-400 hover:text-amber-300">1</div>
                <div className="size-52 border-2">
                    <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-hidden ...">1</div>
                    <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-hidden ...">2</div>
                    <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-hidden ...">3</div>
                    <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-hidden ...">4</div>
                    <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-hidden ...">5</div>
                    <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-hidden ...">6</div>
                </div>
                <div className="size-52 border-2 rotate-45">3</div>
                <div className="size-52 border-2 scale-75">1</div>
                <div className="size-52 border-2 scale-125">2</div>
                <div className="size-52 border-2">3</div>
                {/* custom css [under] */}
                <div className="size-52 border-2 bg-[rgb(86,238,66)] text-[50px] p-[50px]">1</div>
                <div className="size-52 border-2 skew-6">2</div>
                <div className="size-52 border-2">3</div>
                <div className="size-52 border-2 translate-8">1</div>
                <div className="size-52 border-2">2</div>
                <div className="size-52 border-2">3</div>

            </div>
            <button class="bg-violet-500 focus:bg-amber-400 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
                Save changes
            </button>
            {/* <div className='flex'>
        <div className='w-1/2 bg-amber-400'>1</div>
        <div className='w-1/2 bg-red-400'>2</div>
      </div>
      <div className='flex flex-row-reverse'>
        <div className="size-52 border-2">1</div>
        <div className="size-52 border-2">2</div>
        <div className="size-52 border-2">3</div>
      </div>
      <div className='flex flex-col'>
        <div className="size-52 border-2">1</div>
        <div className="size-52 border-2">2</div>
        <div className="size-52 border-2">3</div>
      </div>
      <div className='flex justify-start'>
        <div className="size-52 border-2">1</div>
        <div className="size-52 border-2">2</div>
        <div className="size-52 border-2">3</div>
      </div>
      <div className='flex justify-center'>
        <div className="size-52 border-2">1</div>
        <div className="size-52 border-2">2</div>
        <div className="size-52 border-2">3</div>
      </div>
      <div className='flex justify-end'>
        <div className="size-52 border-2">1</div>
        <div className="size-52 border-2">2</div>
        <div className="size-52 border-2">3</div>
      </div>
      <div className='flex justify-between'>
        <div className="size-52 border-2">1</div>
        <div className="size-52 border-2">2</div>
        <div className="size-52 border-2">3</div>
      </div>
      <div className='flex justify-around'>
        <div className="size-52 border-2">1</div>
        <div className="size-52 border-2">2</div>
        <div className="size-52 border-2">3</div>
      </div>

      <div className='flex h-96 bg-amber-400 justify-around items-end'>
        <div className="size-52 border-2">1</div>
        <div className="size-52 border-2">2</div>
        <div className="size-52 border-2">3</div>
      </div>
      <div className='flex h-96 bg-red-400 justify-around items-center'>
        <div className="size-52 border-2">1</div>
        <div className="size-52 border-2">2</div>
        <div className="size-52 border-2">3</div>
      </div> */}
        </div>
    )
}

export default Flex
