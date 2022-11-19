import { AiOutlineTwitter,AiFillFacebook,AiFillInstagram,AiFillGithub } from "react-icons/ai";

export default function Footer({formdata}){
    return (
        <footer>
        <a href={formdata.twitter} target="_blank"><AiOutlineTwitter size="25px" className="tweet" /></a>
        <a href={formdata.facebook} target="_blank"><AiFillFacebook size="25px" className="fb" /></a>
        <a href={formdata.instagram} target="_blank"><AiFillInstagram size="25px" className="ig" /></a>
        <a href={formdata.github} target="_blank"><AiFillGithub size="25px" className="git" /></a>
        </footer>
    )
}
