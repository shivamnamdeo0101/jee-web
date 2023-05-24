import React ,{useState}from 'react'

function FaqGridComp({item,index}) {

    const [view, setview] = useState(false)
    return (
        <div key={index} className="faq_comp_grid" onClick={()=>setview(!view)}>
            <p>{item?.ques} <i class={view ? "fa fa-caret-up" : "fa fa-caret-down"} aria-hidden="true"></i> </p>
           {view && <h6> {item?.ans} </h6>}

        </div>
    )
}

export default FaqGridComp