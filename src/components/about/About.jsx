import "./About.css"
import Development from "../../img/Development.jpg"
import PythonandExcel from "../../img/Python and Excel.png"

const About = () => {
    return (
        <div>
            <div className="a">
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img 
                            src={Development} alt="" className="a-img"/>
                    </div>
                </div>
                <div className="a-right">
                    <h1 className="a-title"> About Me</h1>
                    <p className="a-sub">
                        I am a finalist BEng (NQF Level 8) Mechanical Engineering student at the University of Pretoria, 
                        with only one module left to complete remotely in the first semester of 2022.
                    </p>
                    <p className="a-desc">
                        I am quick to learn, and can adapt to a different environment and culture swiftly. I am deadline driven, yet
                        believe in quality work, as such, I am dedicated and hardworking. I have excellent creativity and problem solving skills. 
                        I prefer reading on literature or catching up on television in my spare time, and when feeling lazy,
                        I go for a jog to keep my mind and body healthy and active. I value honesty and transparency, and honour
                        constructive criticism because I believe in learning and growing. Although a bit shy at first, I have a lively
                        attitude over time and engage well with others. In trying to overcome being shy, I have been active in
                        tutoring different lessons in the last few years, and have been a part of different teams in different modules.
                    </p>
                    <div className="a-languages">
                        <img src={PythonandExcel} alt="" className="a-languages-img"/>
                        <div className="a-languages-texts">
                            <h4 className="a-languages-title">Python and Excel Visual Basic for Applications (VBA)</h4>
                            <p className="a-languages-desc">
                                I have extensive academic experience in Python, for which I even had an opportunity to tutor the offered module, i.e., MPR 213 – Programming and Information
                                Technology with the University of Pretoria, along with a section of Microsoft Excel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
