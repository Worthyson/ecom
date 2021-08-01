import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"

function Content({title,link}) {
    const user = useAuthState(auth)
    const name = user?.displayName
    return (
        <div className=''>
            <p onClick={link}>{title}</p>
        </div>
    )
}

export default Content
