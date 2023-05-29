import React from 'react'

function ExampComp() {

    const li = [
        {
            "courseName": "Jee Mains",
            "link": require("../assets/1.png")
        },

        {
            "courseName": "Jee Advanced",
            "link": require("../assets/2.png")
        },
        {
            "courseName": "WBJEE",
            "link": require("../assets/3.png")
        },
        {
            "courseName": "VITEEE",
            "link": require("../assets/4.png")
        },
        {
            "courseName": "SRMJEE",
            "link": require("../assets/5.png")
        },
        {
            "courseName": "COMEDK",
            "link": require("../assets/6.png")
        },
        {
            "courseName": "MHTGET",
            "link": require("../assets/7.png")
        },
        {
            "courseName": "And Many More",
            "link": require("../assets/8.png")
        },
    ]

    return (
        <div className='exam_comp'>

            <div className='examp_comp_head'>
                <h1 className='text_gradiant'>If You Are Any One Of The Following This Program Is For You</h1>
            </div>

            <div className='examp_comp_grid'>
                {
                    li.map((item, index) => {
                    return (
                        <div className='examp_grid_child' key={index}>
                            <img src={item?.link} alt="" />
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}

export default ExampComp