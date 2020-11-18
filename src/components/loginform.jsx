import React, {useState} from 'react'

const LoginForm = props => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("*******");
    const [confirmpassword, setConfirmPassword] = useState("*******");

    return(
        <form className="col-3 mx-auto my-3 ">
            <div className="form-group">
                <label>First Name</label>
                <input 
                    type="text" 
                    className="form-control"
                    firstname="firstname"
                    value={firstname}
                    onChange= {(e) => setFirstName(e.target.value) }
                />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input 
                    type="text" 
                    className="form-control"
                    lastname="lastname"
                    value={lastname}
                    onChange= {(e) => setLastName(e.target.value) }
                />
            </div>
            <div className="form-group">
                <label>Email </label>
                <input 
                    type="text" 
                    className="form-control"
                    email="email"
                    value={email}
                    onChange= {(e) => setEmail(e.target.value) }
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input 
                    type="text" 
                    className="form-control"
                    password="password"
                    value={password}
                    onChange= {(e) => setPassword(e.target.value) }
                />
            </div>
            <div className="form-group">
                <label>confirm password</label>
                <input 
                    type="text" 
                    className="form-control"
                    confirmpassword="confirmpassword"
                    value={confirmpassword}
                    onChange= {(e) => setConfirmPassword(e.target.value) }
                />
            </div>
        </form>
    )
}
export default LoginForm