import React from 'react'
import FaqGridComp from './FaqGridComp'

function FaqComp() {


    const li = [
        {
            "ques":"What is the process of counselling?",
            "ans":"After the completion of payment, our team will contact you within 24 hours."
        },
        {
            "ques":"Will my amount be refundable?",
            "ans":"No, this is a non-refundable amount."
        },
        {
            "ques":"What is your availability to provide support and guidance throughout the admission process? ",
            "ans":"We’re always available to you through chat/phone, till you get the admission in your desired college."
        },
        {
            "ques":"What If I have some queries during the counselling?",
            "ans":"No worries! Our team will be connected to you through whatsapp and will be there to help you as soon as possible."
        }
    ]


    return (
        <div className="course_comp faq_comp">
            <h1 className="text_gradiant">Some of the frequently asked questions </h1>

            <div className="faq_row">

                {
                    li.map((item,index)=>{
                        return(
                            <FaqGridComp item={item} index={index} />
                        )
                    })
                }
                

            </div>

        </div>
    )
}


export default FaqComp