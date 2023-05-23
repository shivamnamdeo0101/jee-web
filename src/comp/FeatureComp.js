import React from 'react'

function FeatureComp() {

    const data = [
        {
            "title":"Full Support Till Your College Admission",
        },
        {
            "title":"All Type Of College Admission Counselling Included"
        },
        {
            "title":"Personalized Choice Filling By Our Expert Team",
        },
        {
            "title":"Unlimited Call Support"
        },
        {
            "title":"Scholarship Regarding Help In Your College"
        },
        {
            "title":"24/7 WhatsApp Chat Availability"
        }
    ]

    return (
        <div className='faq feature_screen'>
            <div className='faq_head'>
                <h1>What <mark className='gred_text'> will you get  </mark>  in this counseling !</h1>
            </div>

            <div className='feature_grid'>
                {
                    data.map((item, index) => {
                        return (
                            <div className="faq_grid_comp">
                                <img src="https://i.ytimg.com/vi/xyVfLxV08I0/maxresdefault.jpg" />
                                <p>{item?.title}</p>
                                {/* <p>Get high ROAS and Low CPP using my Testing strategy (Reduce RTO accordingly). </p> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeatureComp