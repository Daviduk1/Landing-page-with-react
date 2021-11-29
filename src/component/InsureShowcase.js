import React from 'react'
import desktopRight from '../assets/insure-landing-page-master/images/bg-pattern-intro-right-desktop.svg'
import desktopLeft from '../assets/insure-landing-page-master/images/bg-pattern-intro-left-desktop.svg'
import mobilePic from '../assets/insure-landing-page-master/images/image-intro-mobile.jpg'
const InsureShowcase = () => {
    return (
        <section className="showcase">
            <div className="desktop">
                <img src={desktopRight} />

            </div>
            <div className = "left">
                <img src = {desktopLeft} />
            </div>
            <div className = "human">
                <div className = "details">
                    <h2></h2>
                    <h1>Humanizing <br /> your insurance</h1>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise <br />
                    and technology to help you find the plan that’s right for you. Ensure you <br />
                    and your loved ones are protected.</p>
                    <button>veiw plans</button>
                </div>
                <div className = "working-hard">
                    <img src = {mobilePic} />
                </div>
            </div>
        </section>
            
        
    )
}

export default InsureShowcase
