import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchusers } from "../slices/userSlice";

function Users(){
    const {users,isPending,isError,errMsg}=useSelector(state=>state.users);
    console.log(users)
    let dispatch=useDispatch()
    useEffect(()=>{
            let actionObj=fetchusers("https://jsonplaceholder.typicode.com/users");  //creating action object
            dispatch(actionObj);
        }
    ,[])
    return(
        <div>
            <h1>Users</h1>
        </div>
    )
}

export default Users;