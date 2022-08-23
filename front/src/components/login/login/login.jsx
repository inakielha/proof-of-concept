import { useAuth0 } from "@auth0/auth0-react";
import { Button,TextField, } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";


export default function Login(){
    const {loginWithRedirect} = useAuth0()

    useEffect(()=>{
        loginWithRedirect()
    },[])
    // return    <Button onClick={()=>loginWithRedirect()}>Login</Button>
    
//     const [input, setInput] = useState({
//         userEmail:"",
//         userPassword:""
//     })
//     function submitForm (e){
//         e.preventDefault()
        
//     }
//     return(
//         <div>
//             <h3 className={style.title}>Proof of Concept</h3>
//             <div className={style.containerLogin}>
//             <h4 className={style.login}>Log In</h4>
//             <form className={style.form} onSubmit={(e)=>submitForm(e)}>
//             <TextField id="outlinesd-basic" label="Email" variant="outlined" name="userEmail" value={input.userEmail} onChange={(e)=>handleInput(e)} />
               
//             <TextField sx={{margin: "2em 0",width:"100%"}} id="outlined-basic" label="Password" variant="outlined" type="password" name="userPassword" value={input.userPassword} onChange={(e)=>handleInput(e)} />
//             <Button sx={{fontFamily:"lato"}} variant="contained" type="submit">Continue</Button>
//             </form>
//             </div>
//         </div>
//     )
// }
}