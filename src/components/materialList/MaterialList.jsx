import "./MaterialList.css"
import Material from "../materialCard/MaterialCard"
import {Materials} from "../../data"

const MaterialList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Reading Material. Self Taught</h1>
                <p className="pl-desc">
                    I am currently going through the following books to further develop myself. Any suggested material would be highly appreciated.
                </p>
            </div>
            <div className="pl-list">
                {Materials.map((item) => (
                    <Material key={item.id} img={item.img}/>
                ))}
            </div>
        </div>
    )
}

export default MaterialList
