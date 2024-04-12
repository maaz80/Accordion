import { useState } from 'react'
import data from "./components/Accodian/data"
import Navbar from './components/Navbar'

function App() {
  const [selected, setSelected] = useState(0)

  const handlesingleselection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null :getCurrentId)
  }

  return (
    <>
    <Navbar/>
      <div className='bg-red-600 flex justify-center items-center overflow-hidden'>
        <div className='bg-orange-300 flex flex-col justify-center  p-10 rounded-md md:w-[30%] w-[90%]'>
          {
            data && data.length > 0 ? (
              data.map((dataItem) => (
                <div key={dataItem.id} className='Item'>
                  <div onClick={() => { handlesingleselection(dataItem.id) }}>
                    <h3 className='flex justify-between bg-gray-600 rounded-md my-3 items-center pl-2'>{dataItem.question}  <span className='flex justify-end bg-red-600 rounded-md p-2 hover:font-bold hover:bg-red-800'>+</span></h3>
                   
                  </div>
                  {
                    selected === dataItem.id ?
                      <div className='bg-red-600 rounded-md text-center mb-3'>{dataItem.answer}</div>
                      : null
                  }
                </div>
              ))
            ) : (
              ""
            )
          }

        </div>
      </div>
    </>
  )
}

export default App
