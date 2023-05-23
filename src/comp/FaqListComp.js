import React,{useState} from 'react'

function FaqListComp({item}) {

    const [view, setview] = useState(false)

    return (
        <div className='faq_list_comp'>

            <div className='faq_ques_ans'>
                <h6>{item?.ques}</h6>
{ view &&   <p>{item?.ans}</p>
}
            </div>

            <div className='faq_button' onClick={()=>setview(!view)}>
               {view ? <p>-</p> : <p>+</p>}
            </div>
        </div>
    )
}

export default FaqListComp