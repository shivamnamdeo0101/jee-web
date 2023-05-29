import React from 'react'

function BannerComp() {
    return (

        <div className='bannger_page'>
            <div className="bannner">
                <div className="headings">
                    <h1 className="text_yellow_gradiant web_heading">Get Expert Guidance </h1>
                    <h1 className="text_white web_subheading"> Till Your College Admission</h1>
                    <div class="banner_container">
                        <div class="banner_content">
                            <p className="banner_text web_text"> You’ll get complete guidance till you get admitted into a well deserved engineering college.
                                Whether you’ve scored good marks, average marks or you’ve got lower marks in the respective competitive exams.
                                We’ll guide you to get admission into the best college across the country.</p>
                        </div>
                    </div>
                </div>

                <div className="headings">
                    <img className='banner-img' src="https://i.ytimg.com/vi/xyVfLxV08I0/maxresdefault.jpg" alt="" />
                </div>
            </div>



            <button className="banner_button" onClick={() => window.open("https://rzp.io/l/uSLGxMoM")}> Fill the form for counsling support</button>

        </div>

    )
}

export default BannerComp