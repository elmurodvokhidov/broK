import { useContext } from "react"
import { ContexData } from "../context/ContextDate"

function MyProfile() {

    const { backfunc, myProf } = useContext(ContexData);

    return (
        <>
            <div className="myProfile">
                <div className="logIn">
                    <div className="topLI">
                        <div className="leftTop">
                            <button onClick={backfunc}><span>back</span></button>
                        </div>
                        <div className="centerTop">
                            <h1>Log In</h1>
                        </div>
                        <div className="rightTop">

                        </div>
                    </div>
                    <div className="centerLI">
                        {/* <div className="inputUchun">
                            <label htmlFor="fullName">Full name</label>
                            <input type="text" name="fullName" id="fullName" placeholder="Enter your full name" />
                        </div> */}
                        <div className="inputUchun">
                            <label htmlFor="email">email</label>
                            <input type="text" name="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="inputUchun">
                            <label htmlFor="password">password</label>
                            <input type="text" name="password" id="password" placeholder="Enter your password" />
                        </div>
                    </div>
                    <div className="bottomLI">
                        <button onClick={myProf} id="submit">submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyProfile