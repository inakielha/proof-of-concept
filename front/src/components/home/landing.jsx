import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearResponse, resizeImage } from "../../redux/action";
import { Backdrop, Button, CircularProgress, Container, IconButton } from "@mui/material";
import style from "./landing.module.css"
import { useNavigate } from "react-router-dom";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginDialog from "../materialComponents/loginDialog";
import ImageIcon from '@mui/icons-material/Image';
import Webcamera from "../webcam/webcam";
import {useDropzone} from "react-dropzone"

export default function Landing() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [takeSelfie, setTakeSelfie] = useState(false)
    const [btn, setBtn] = useState(false)
    const {isAuthenticated} = useAuth0()
    const [isLogged, setIslogged] = useState(false)
    const [input, setInput] = useState({
        type: "",
        img: ""
    })

    const backResponse = useSelector((state) => state.response);
    if (backResponse?.ok) navigate("/resize")


    function handleSubmit(e) {
        e.preventDefault()
        dispatch(resizeImage(input))
        setBtn(true)
    }

    function handleSelfie(e) {
        if (!isAuthenticated) return setIslogged(true)
        setTakeSelfie(!takeSelfie)
    }

    useEffect(() => {
        dispatch(clearResponse())
        setBtn(false)
    }, [input])



    const {getRootProps, getInputProps} = useDropzone({
        accept: {
         "image/jpeg": [".jpeg"],
         "image/png": [".png"],
        },
        maxFiles:1,
        onDrop: (acceptedFiles)=>{
            if (!isAuthenticated) return setIslogged(true)
            let imageName = document.getElementById("imageName")
    
            console.log(acceptedFiles)
            // CONVERT IT IN BASE 64
            imageName.innerText = acceptedFiles[0].name;
            const reader = new FileReader();
            reader.readAsDataURL(acceptedFiles[0])
            reader.onloadend = () => {
                setInput({
                    type: acceptedFiles[0].type,
                    img: reader.result,
                    size: acceptedFiles[0].size
                })
            }
        }
    })

    return (
        
        <Container >
            <Container sx={{marginTop:"5em"}}>

            <h1 className={style.form}>Resize Image</h1>

            {isLogged ? <LoginDialog setIslogged={setIslogged}/> :
            <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
                <div  className={style.labelContainer}>
                    <label {...getRootProps()} htmlFor="inputTag" className={style.label} >
                        {!input.img && <div className={style.label__selectImg}>
                            Select image
                            <ImageIcon sx={{margin:"0.4em 0"}} />
                            PNG or JPEG format
                        </div>}
                        <input {...getInputProps()} />
                        {input.img ? <img className={style.fileImage} src={input.img} alt="test"></img> : ""}
                        <span id="imageName" ></span>
                    </label>
                </div>
                <div className={style.labelContainer}>
                    <div className={style.label} onClick={handleSelfie}>
                    { takeSelfie ? <Webcamera setInput={setInput}/> : <div className={style.label}>
                        Take a selfie!
                    <CameraAltIcon/>
                    </div>
                    }
                    </div>
                
                </div>
                {backResponse?.msg && <div className={style.error}><span >{backResponse.msg} </span></div>}
                {(btn && !backResponse) && <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={btn}
                    onClick={()=>setBtn(false)}
                    >
                    <CircularProgress color="inherit" />
                </Backdrop> }

            <Button disabled={!input.img} variant="contained" type="submit" sx={{marginBottom:"2em"}}>Continue</Button>
        </form>
    }
            </Container>
        </Container >
    )
}