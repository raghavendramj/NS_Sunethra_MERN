import { useState } from "react";

function UseStateHook() {

    const [myRole, setMyRole] = useState("Developer");

    const changeRole = () => {
        let role = document.getElementById("changeRole").value;
        setMyRole(role);
        document.getElementById("changeRole").value = "";
    }

    return (
        <div className="container m-3">
            <h1>My Current Role is :- </h1>
            <h1>{myRole}</h1>
            <input type="text" className="form-control" name="changeRole" id="changeRole" />
            <button type="submit" className="btn btn-primary mt-3" onClick={() => changeRole()} >Change Role</button>
        </div>
    );
}

export default UseStateHook;
