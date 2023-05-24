import React from 'react'

function ExampComp() {
    return (
        <div className='exam_comp'>

            <div className='examp_comp_head'>
                <h1 className='text_gradiant'>If You Are Any One Of The Following This Program Is For You</h1>
            </div>

            <div className='examp_comp_grid'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                        return (
                            <div className='examp_grid_child'>
                                <img src="https://lp1.learnmize.in/wp-content/uploads/2023/01/6-1.png" alt="" />
                                <p>Digital Marketers</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ExampComp