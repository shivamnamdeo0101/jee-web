import React from 'react'

function TestimoComp() {
    return (
        <div className='faq'>
            <div className='test_head'>
                <h1>Testimonials</h1>
            </div>

            <div className='test_grid'>
                {
                    [1, 2, 3].map((item, index) => {
                        return (
                            <div className="test_grid_comp">
                                <h1>BOOST E-COMMERCE</h1>
                                <p>Get high ROAS and Low CPP using my Testing strategy (Reduce RTO accordingly). </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TestimoComp

