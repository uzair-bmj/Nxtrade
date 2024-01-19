import { useContext } from "react";
import { Data } from "../Context/UserDataContext";


const UserData = ()=>{
    return useContext(Data)
}

export default UserData;
