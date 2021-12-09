import "./MaterialCard.css"

const MaterialCard = ({img}) => {
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <img src={img} alt="" className="p-img"/>
        </div>
    )
}

export default MaterialCard

