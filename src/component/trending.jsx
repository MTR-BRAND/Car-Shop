import React from 'react'
function Trending() {
  return (
    <>
        <div className='mainT'>
            <h2 className='TreH'>Trending near you</h2>
            <div className='MainCrad'>
                <div className='card'>
                    <div className='cardImg'>
                        <img src="image/Img.png" alt="" />
                    </div>
                   <div className='p-2 cradText'>
                   <h5 className='cradFont'>Used 2019 Audi S4 Premium Plus</h5>
                    <p>11 475 Miles</p>
                    <p>AWD <span><img src="image/point.png" alt="" /></span> 4-Cylinder Turbo</p>
                    <div className='cradBtnBox'>
                        <button className='cradBtn1'>$41,400</button>
                        <button className='cradBtn2'>Bestseller</button>
                    </div>
                   </div>

                </div>

                <div className='card'>
                    <div className='cardImg'>
                        <img src="image/Img2.png" alt="" />
                    </div>
                   <div className='p-2 cradText'>
                   <h5 className='cradFont'>2013 Subaru Forester Premium Plus</h5>
                    <p>40 475 Miles</p>
                    <p>AWD <span><img src="image/point.png" alt="" /></span> 4-Cylinder Turbo</p>
                    <div className='cradBtnBox'>
                        <button className='cradBtn1'>$22,500</button>
                        <button className='cradBtn2'>Bestseller</button>
                    </div>
                   </div>

                </div>

                <div className='card'>
                    <div className='cardImg'>
                        <img src="image/Img3.png" alt="" />
                    </div>
                   <div className='p-2 cradText'>
                   <h5 className='cradFont'>Used 2010 BMW X3 Sport package</h5>
                    <p>20 850 Miles</p>
                    <p>RWD <span><img src="image/point.png" alt="" /></span> 4-Cylinder</p>
                    <div className='cradBtnBox'>
                        <button className='cradBtn1'>$39,200</button>
                        <button className='cradBtn2'>Bestseller</button>
                    </div>
                   </div>

                </div>
            </div>

            
        </div>
    </>
  )
}

export default Trending;