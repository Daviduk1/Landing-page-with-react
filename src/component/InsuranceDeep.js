import React from 'react'
import snappy from '../assets/insure-landing-page-master/images/icon-snappy-process.svg'
import prices from '../assets/insure-landing-page-master/images/icon-affordable-prices.svg'
import people from '../assets/insure-landing-page-master/images/icon-people-first.svg'
import mobbileRight from '../assets/insure-landing-page-master/images/bg-pattern-intro-right-desktop.svg'

const InsuranceDeep = () => {
    return (
        <section id = "insureDeep">
            <div className ="deep">
            <h2></h2>
            <h1>We're different</h1>

            </div>
            <div className = "icons">
                <div className = "snappy">
                    <img src = {snappy} />
                    <h1>Snappy process</h1>
                    <p> Our application process can be completed in <br />minutes, not hours. Don’t get 
                    stuck filling in <br />tedious forms.</p>
                </div>

                <div className = "prices">
                    <img src = {prices} />
                    <h1>Affordable Prices</h1>
                    <p>We don’t want you worrying about high monthly <br />costs. Our prices may be low, 
                    but we still offer<br /> the best coverage possible.</p>
                </div>

                <div className = "people">
                    <img src = {people} />
                    <h1> People First</h1>
                    <p> Our plans aren’t full of conditions and clauses<br /> to prevent payouts. We make 
                    sure you’re <br />covered when you need it.</p>
                </div>
            </div>
            <div className = "find-out">
                <h1>Find out more <br /> about how we work</h1>
                <button>How we work</button>
                <img src = {mobbileRight} />
            </div>
        </section>
        
    )
}

export default InsuranceDeep
