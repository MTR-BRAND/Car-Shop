import React from 'react'

function Selling() {
  return (
    <>
        <div className='sellingMain'>
            <h1 className='text-center TreH'>Explore best selling car makes</h1>
            <div className='sellingBox'>
                {/* sellingCrad */}
                <div className='sellingCrad'>
                    <div className='sellingImg'>
                        <img src="image/Bitmap.png" alt="" />
                    </div>
                    <div className='sellingText'>
                        <p className='p1'>Subaru</p>
                        <p className='p2'>from $40k</p>
                    </div>
                </div>

                <div className='sellingCrad'>
                    <div className='sellingImg'>
                        <img src="image/Bitmap2.png" alt="" />
                    </div>
                    <div className='sellingText'>
                        <p className='p1'>Volkswagen</p>
                        <p className='p2'>from $15k</p>
                    </div>
                </div>


                <div className='sellingCrad'>
                    <div className='sellingImg'>
                        <img src="image/Bitmap3.png" alt="" />
                    </div>
                    <div className='sellingText'>
                        <p className='p1'>Toyota</p>
                        <p className='p2'>from $27k</p>
                    </div>
                </div>


            </div>



            {/* selling Box 2 */}

            <div className='sellingBox  sellingBox2'>
                {/* sellingCrad */}
                <div className='sellingCrad'>
                    <div className='sellingImg'>
                        <img src="image/Bitmap4.png" alt="" />
                    </div>
                    <div className='sellingText'>
                        <p className='p1'>Mercedes-Benz</p>
                        <p className='p2'>from $60k</p>
                    </div>
                </div>

                <div className='sellingCrad'>
                    <div className='sellingImg'>
                        <img src="image/Bitmap5.png" alt="" />
                    </div>
                    <div className='sellingText'>
                        <p className='p1'>Mercedes-Benz</p>
                        <p className='p2'>from $30k</p>
                    </div>
                </div>


                <div className='sellingCrad'>
                    <div className='sellingImg'>
                        <img src="image/Bitmap6.png" alt="" />
                    </div>
                    <div className='sellingText'>
                        <p className='p1'>Infiniti</p>
                        <p className='p2'>from $54k</p>
                    </div>
                </div>


            </div>
        </div>
    </>
  )
}

export default Selling