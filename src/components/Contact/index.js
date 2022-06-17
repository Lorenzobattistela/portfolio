import { useEffect, useRef, useState } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import emailjs from "@emailjs/browser"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    useEffect(()=> {
        setTimeout(()=> {
            return setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            refForm.current,
            process.env.REACT_APP_PUBLIC_KEY_EMAIL)
        ).then(
            ()=> {
                alert("Message successfully sent");
                window.location.reload(false)
            },
            () => {
                alert("Failed to send message. Try again.");
            }
        )
    }
    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={["C", "o", "n", "t", "a","c","t", " ", "m", "e"]} idx={15}/>
                    </h1>
                    <p>
                        I AM INTERESTED IN... TEXT HERE
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li> 

                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li> 

                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required/>
                                </li> 

                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li> 
                                <li>
                                    <input type="submit" className="flat-button" value="SEND"/>
                                </li> 
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Lorenzo Battistela,
                    <br/>
                    Brazil,
                    <br/>
                    Av Maurício Cardoso, 1600
                    <br/>
                    Erechim 
                    <br/>
                    <span>lorenzowbdev@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Lorenzo lives here, come over for a cup of coffe :D</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact