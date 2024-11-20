import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState('red')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:colour}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:'orange'}} onClick={() => setColour('orange')}></button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:'blue'}} onClick={() => setColour('blue')}></button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:'yellow'}} onClick={() => setColour('yellow')}></button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:'green'}} onClick={() => setColour('green')}></button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:'red'}} onClick={() => setColour('red')}></button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:'violet'}} onClick={() => setColour('violet')}></button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:'gray'}} onClick={() => setColour('gray')}></button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:'black'}} onClick={() => setColour('black')}></button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:'indigo'}} onClick={() => setColour('indigo')}></button>   
          </div>
        </div>
      </div>
    </>
  )
}

export default App
