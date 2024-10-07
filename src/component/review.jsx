import React from 'react'

function Review() {
  return (
    <>
         <div className='mainT mainT2'>
            <h2 className='TreH'>Recent reviews</h2>
            <div className='MainCrad'>
                <div className='card'>
                    <div className='cardImg'>
                        <img src="image/ImgR1.png" alt="" />
                    </div>
                   <div className='p-2 cradText'>
                   <h5 className='cradFont'>2021 Cadillac Escalade</h5>
                    <p>The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.</p>
                    <div className='reviewBox'>
                        <div className='allImg'>
                            <div>
                            <img src="image/Oval.png" alt="" />
                            </div>
                        <div className="allR">
                            <div>
                            <p className='allName'>Hironaka Hiroe</p>
                            </div>
                            <div className='allRimg'>
                                <p className='allP1'><img src="image/star.png" alt="" />4.91</p>
                                <p className='allP2'>(98)</p>
                            </div>
                        </div>
                        </div>
                        <p className='Editor text-dark'>Chief Editor</p>
                    </div>
                   </div>

                </div>

                <div className='card'>
                    <div className='cardImg'>
                        <img src="image/ImgR2.png" alt="" />
                    </div>
                   <div className='p-2 cradText'>
                   <h5 className='cradFont'>2021 Hyundai Elantra</h5>
                    <p>If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. </p>
                    <div className='reviewBox'>
                        <div className='allImg'>
                            <div>
                            <img src="image/Oval2.png" alt="" />
                            </div>
                        <div className="allR">
                            <div>
                            <p className='allName'>Debashis Bhuiyan</p>
                            </div>
                            <div className='allRimg'>
                                <p className='allP1'><img src="image/star.png" alt="" />4.65</p>
                                <p className='allP2'>(93)</p>
                            </div>
                        </div>
                        </div>
                        <p className='Editor text-dark'>News Editor</p>
                    </div>
                   </div>

                </div>

                <div className='card'>
                    <div className='cardImg'>
                        <img src="image/ImgR3.png" alt="" />
                    </div>
                   <div className='p-2 cradText'>
                   <h5 className='cradFont'>2021 Mercedes-Benz GLA250</h5>
                    <p>The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. </p>
                    <div className='reviewBox'>
                        <div className='allImg'>
                            <div>
                            <img src="image/Oval3.png" alt="" />
                            </div>
                        <div className="allR">
                            <div>
                            <p className='allName'>Lew Silverton</p>
                            </div>
                            <div className='allRimg'>
                                <p className='allP1'><img src="image/star.png" alt="" />4.55</p>
                                <p className='allP2'>(35)</p>
                            </div>
                        </div>
                        </div>
                        <p className='Editor text-dark'>Chief Editor</p>
                    </div>
                   </div>

                </div>

               

            </div>

            
        </div>
    </>
  )
}

export default Review