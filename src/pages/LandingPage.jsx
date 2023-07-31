import Header from "../components/Header"
import heroImg from "../assets/hero.png"
import infoImg from "../assets/info_blurb.jpg"

import { Link } from "react-router-dom"
import "./LandingPage.css"

/**
 * @returns {ReactComponentElement} The landing page for the website
 */
function LandingPage() {
    return (
        <div>
            <Header />
            <div className="lp-container w-100 d-flex flex-column align-items-center">
                {/* Hero */}
                <div className="d-flex flex-row justify-content-evenly landing--rows">
                    <img className="hero--img" src={heroImg}></img>
                    <div className="hero--blurb d-flex flex-column">
                        <h2>Tools to Make Game Mastery Easy</h2>
                        <Link to={`/encounter-calculator`}>
                            <button className="cta--btn">Try Now</button>
                        </Link>
                    </div>
                </div>

                {/* Info/About Blurb */}
                <div className="d-flex flex-row justify-content-evenly landing--rows">
                    <div className="info--blurb d-flex flex-column ">
                        <h2>What does <i>Pathfinder Tools</i> offer?</h2>
                        <p>
                            Have you ever wanted to get into Pathfinder 2e but felt intimidated
                            by the glut of rules and intricacies the system presents? Fear
                            not! <i> Pathfinder Tools</i> offers all the necessities for running and playing
                            a session without the hassle of longform dedicated prep. Though we
                            only currently only have our <i>Encounter Calculator</i>, we're sure our
                            current and future offerings will be sure to streamline starting up
                            your next game! Our <i>Encounter Calculator</i> especially offers you:
                        </p>
                        <ul className="info--benefits">
                            <li><em>Easy Encounter Balancing</em></li>
                            <li><em>Creature Recommendations</em></li>
                            <li><em>Complete Calculation of all Permutations of Possible Encounters</em></li>
                        </ul>
                    </div>
                    <img className="info-blurb--img" src={infoImg}></img>
                </div>

                {/* Call to Action */}
                <div className="w-100 d-flex flex-row justify-content-evenly landing--rows mb-5">
                    <div className="call-to-action d-flex align-items-center justify-content-center">
                        <div className="cta--blurb d-flex flex-column align-items-center p-4 gap-4">
                            <h2 className="cta--text">Get Started Playing Now!</h2>
                            <p>Hop into encounter creation for your next session with our <i>Encounter Calculator</i> now!</p>
                            <Link to={`/encounter-calculator`}>
                                <button className="cta--btn">Try Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage