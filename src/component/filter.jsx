import React from 'react'

function Filter() {
  return (
    <>
      <div className='min'>
        <h2 className='filterFont'>Which vehicles you are looking for? </h2>
        <div className='d-flex justify-content-center align-align-items-center gap-4 filterBox'>

          <div className='filterType'>
            <span>Type</span>
            <select>
              <option>Used Card</option>
              <option>One</option>
              <option>Tow</option>
            </select>
          </div>

          <div className='line'></div>

          <div className='filterType'>
            <span>Make</span>
            <select>
              <option>Infiniti</option>
              <option>One</option>
              <option>Tow</option>
            </select>
          </div>

          <div className='line'></div>

          <div className='filterType2'>
            {/* <span>Type</span> */}
            <select>
              <option>Year</option>
              <option>One</option>
              <option>Tow</option>
            </select>
          </div>

          <div className='line'></div>

          <div className='filterType2'>
            {/* <span>Type</span> */}
            <select>
              <option>Model</option>
              <option>One</option>
              <option>Tow</option>
            </select>
          </div>

          <div className='line'></div>

          <div className='filterType2'>
            {/* <span>Type</span> */}
            <select>
              <option>Price</option>
              <option>One</option>
              <option>Tow</option>
            </select>
          </div>

          <div className='btnBox'>
            <button>
              <img src="image/icon.png" alt="" />
              Search
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Filter