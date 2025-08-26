import React from 'react'
import lifeat from "../../assets/lifeat.png"

function Lifeat() {
  return (
    <section className='lifeat py-20'>
      <div className='container'>
        <h2 className='text-center'>Life at IFFCO-MC</h2>
      </div>
      <div className='container'>
        <img src={lifeat} className='w-full'/>
      </div>
    </section>
  )
}

export default Lifeat
