import "./Intro.css"
import Kamogelo from "../../img/Kamo.jpg"

const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, my name is</h2>
                    <h1 className='i-name'>Kamogelo Sephokgole</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Candidate Mechanical Engineer</div>
                            <div className='i-title-item'>Aspiring Software Engineer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                    Ever since discovering my skills in programming, for which I obtained 80% in the offered module, 
                    I have ever so wished to become a software engineer, but that seemed farfetched with just basic Python language,
                    until now. I am more than willing to study and develop myself further in this field.
                    </div>
                </div>
            </div> 
            <div className='i-right'>
                <div className="i-bg"></div>
                <img src={Kamogelo} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
