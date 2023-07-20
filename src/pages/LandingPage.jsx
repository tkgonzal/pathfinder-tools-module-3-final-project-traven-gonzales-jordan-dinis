import Header from "../components/Header"
import heroImg from "../assets/hero.png"
import infoImg from "../assets/info_blurb.jpg"

import "./LandingPage.css"

function LandingPage() {
    return (
        <div>
            <Header />
            <div className="Container w-100 d-flex flex-column align-items-center">
                <div className="d-flex flex-row justify-content-evenly landing--rows">
                    <img className = "hero--img" src = {heroImg}></img>
                    <div>
                        Hero
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-evenly landing--rows">
                    <div>
                        Info Blurb
                    </div>
                    <img className = "info--blurb--img" src = {infoImg}></img>
                </div>
                <div className="w-100 d-flex flex-row justify-content-evenly landing--rows">
                    <div className="call--to--action">

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default LandingPage