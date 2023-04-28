import './style.css' 
export default function Avatar({img,name}){
    return(
        <div className="card">
            <h3>Name:{name}</h3>
            <img src={img} />
        </div>
    )
}