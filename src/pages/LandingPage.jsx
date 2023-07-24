import Header from "../components/Header"
import heroImg from "../assets/hero.png"
import infoImg from "../assets/info_blurb.jpg"

import { Outlet, Link } from "react-router-dom"
import "./LandingPage.css"

function LandingPage() {
    return (
        <div>
            <Header />
            <div className="lp-container w-100 d-flex flex-column align-items-center">
                <div className="d-flex flex-row justify-content-evenly landing--rows">
                    <img className="hero--img" src={heroImg}></img>
                    <div className="hero--blurb d-flex flex-column">
                        <h1>Tools to make GMing easy</h1>
                        <Link to={`/encounter-calculator`}>
                            <button className="btn--link">Try Now</button>
                        </Link>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-evenly landing--rows">
                    <div className="info--blurb d-flex flex-column ">
                        <h1>What does <i>Pathfinder Tools</i> offer?</h1>
                        Have you ever wanted to get into Pathfinder 2e but felt intimidated by the glut of rules and intricacies the system presents? Fear not! Pathfinder Tools offers all the necessities for running and playing a session without the hassle of longform dedicated prep. Though we only currently only have our Encounter Calculator, we're sure our current and future offerings will be sure to streamline starting up your next game !
                        <ul className="info--benefits">
                            <li>Easy Encounter Balancing</li>
                            <li>Creature Recommendations</li>
                            <li>Complete Calculation of all permutations</li>
                        </ul>
                    </div>
                    <img className="info--blurb--img" src={infoImg}></img>
                </div>
                <div className="w-100 d-flex flex-row justify-content-evenly landing--rows">
                    <div className="call--to--action">
                        <div className="cta--blurb d-flex flex-column align-items-center justify-content-center">
                            <h1 className="cta--text">What are you waiting for, try Now</h1>
                            <Link to={`/encounter-calculator`}>
                                <button className="btn--link">Try Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage