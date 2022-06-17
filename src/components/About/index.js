import { faCss3, faGitAlt, faHtml5, faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import { faFlask } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"

 const About = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    useEffect(()=> {
        setTimeout(()=> {
            return setLetterClass("text-animate-hover")
        }, 3000)
    }, [])
    return(
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={["A","b","o","u","t"," ", "m", "e"]} idx={15}/>
                    </h1>
                    <p>
                        I'm very ambitious front-end developer looking for a role in
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quietly confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family
                        person, father of a beautiful daughter, a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color="#dd0031"/>
                        </div>

                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                        </div>

                        <div className="face3">
                            <FontAwesomeIcon icon={faGitAlt} color="#28a4d9"/>
                        </div>

                        <div className="face4">
                            <FontAwesomeIcon icon={faCss3} color="#5ed4f4"/>
                        </div>

                        <div className="face5">
                            <FontAwesomeIcon icon={faPython} color="#efd81d"/>
                        </div>

                        <div className="face6">
                            <FontAwesomeIcon icon={faFlask} color="#ec4d28"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
 }

 export default About

