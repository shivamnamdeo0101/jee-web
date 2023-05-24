import React from 'react'

function BannerComp() {
    return (

        <div className='bannner'>
            <div>
                <h1 className="text_gradiant">Get Expert Guidance </h1>
                <h1 className="text_white   "> Till Your College Admission</h1>

                
                <img className='banner-img' src="https://i.ytimg.com/vi/xyVfLxV08I0/maxresdefault.jpg" alt="" />
                <div class="banner_container">
                    <div class="banner_content">
                        <p className="banner_text"> You’ll learn the easiest method to sell digital products.
                            Even a 14-year-old kid can successfully implement the new strategy and make more than 1 lakh/month on automation.</p>
                    </div>
                </div>

            </div>
            <button className="banner_button" onClick={()=>window.open("https://rzp.io/l/uSLGxMoM")}> Fill the form for counsling support</button>
        </div>

    )
}

export default BannerComp