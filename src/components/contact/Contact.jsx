import "./Contact.css"
import Phone from "../../img/Phone.png"
import Email from "../../img/Email.png"
import Address from "../../img/Address.png"
import LinkedIn from "../../img/LinkedIn.png"
import Github from "../../img/Github.png"
import React, { useContext, useRef, useState } from "react"
import emailjs from "emailjs-com"
import { ThemeContext } from "../../context"

const Contact = () => {
        const formRef = useRef(null)

        const [done, setDone] = useState(false)

        const theme = useContext(ThemeContext);
        const darkMode = theme.state.darkMode

        const handleSubmit = (e)=>{
            e.preventDefault()
            emailjs
                .sendForm(
                    'service_kfa2azd',
                    'template_hfz6aqh', 
                    formRef.current,
                    'user_1UQ6xz3KSCmqFxzLvDCQ3'
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setDone(true)
                    },
                    (error) => {
                        console.log(error.text);
                    });
    };
        
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon"/>
                            (+27) 84 993 8744
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon"/>
                            Kamogelosephokgole07@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon"/>
                            936 Block X, Tlhalosa Street, Soshanguve, Pretoria, 0152
                        </div>
                        <div className="c-info-item">
                            <img src={LinkedIn} alt="" className="c-icon"/>
                            https://www.linkedin.com/in/kamogelo-sephokgole-8038071a1/
                        </div>
                        <div className="c-info-item">
                            <img src={Github} alt="" className="c-icon"/>
                            https://github.com/Kamogelo-Prince-Sephokgole
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>You want to discuss my future with you?</b> Let us talk. 
                        I can be contacted at all times.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email Address" name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {done && <b> Message Sent</b>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
