import React from 'react'

export default function Middle() {
  return (
    <div >
        <div className='max-w-[1350px] m-auto   md:grid grid-cols-2 p-4'>
            <div  className='md:w-[70%] col-span-1 '>
<img src='./img/laptop.jpg' className='w-[100%] h-[100%]' ></img>
            </div>
            <div className=' w-[100%] col-span-1 flex flex-col justify-center'>
                <h4 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h4>
                <p className='my-3 text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?</p>

<button className='bg-black text-white p-3 text-bold rounded w-[200px]'>Get Started</button>
            </div>

        </div>


    </div>
  )
}
