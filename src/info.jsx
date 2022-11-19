export default function Info({formdata}){
    return (
        <div className="myinfo">
            <img src={formdata.image} className="photo" />
            <h1>{formdata.firstname +" "+formdata.lastname}</h1>
            <h4>{formdata.occupation}</h4>
        </div>
    )
}