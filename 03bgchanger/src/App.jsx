import { useState } from 'react'

function App() {
  const [backgroundcolour, setbackgroundcolour] = useState("pink")

  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen' style={{ backgroundColor: backgroundcolour }}>
        <h1 className='mb-80 text-6xl'>BG Changer</h1>

        <div className='m-4 flex flex-row justify-evenly bg-white text-black rounded-lg'>
          <button className='bg-red-700 px-6 py-1 m-2 rounded-lg'
            onClick={() => { setbackgroundcolour("red") }}>
          Red
        </button>
        <button className='bg-green-700 px-6 py-1 m-2 rounded-lg'
            onClick={() => { setbackgroundcolour("green") }}>
          Green
        </button>
        <button className='bg-yellow-700 px-6 py-1 m-2 rounded-lg'
            onClick={() => { setbackgroundcolour("yellow") }}>
          Yellow
        </button>
        <button className='bg-violet-700 px-6 py-1 m-2 rounded-lg'
            onClick={() => { setbackgroundcolour("violet") }}>
          Violet
        </button>
        <button className='bg-blue-700 px-6 py-1 m-2 rounded-lg'
            onClick={() => { setbackgroundcolour("blue") }}>
          Blue
        </button>
        
      </div>
    </div >
    </>
  )
}

export default App
