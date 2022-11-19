export default function About({formdata}){
    return (
        <div className="about">
            <div className="about_me">
            <h3>About</h3>
            <p>{formdata.about}</p>
            </div>
            <div className="my_interests">
            <h3 >Interests</h3>
            <p>{formdata.interests}</p>

            </div>
        </div>
    )
}