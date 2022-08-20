import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearResponse, resizeImage } from "../../redux/action";
import { Backdrop, Button, CircularProgress, Container } from "@mui/material";
import style from "./landing.module.css"
import { useNavigate } from "react-router-dom";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useEffect } from "react";
import loader from "../../assets/Loading.gif"

export default function Landing() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [btn, setBtn] = useState(false)
    const [input, setInput] = useState({
        type: "",
        img: ""
    })

    const backResponse = useSelector((state) => state.response);
    if (backResponse?.ok) navigate("/resize")

    function fileChange(e) {

        let imageName = document.getElementById("imageName")

        console.log(e.target.files[0])
        // CONVERT IT IN BASE 64
        imageName.innerText = e.target.files[0].name;
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onloadend = () => {
            setInput({
                type: e.target.files[0].type,
                img: reader.result,
                size: e.target.files[0].size
            })
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(resizeImage(input))
        setBtn(true)
    }
    useEffect(() => {
        dispatch(clearResponse())
        setBtn(false)
    }, [input])
    return (
        <Container>
            <h1 className={style.form}>Resize Image</h1>
            <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
                <div className={style.labelContainer}>
                    <label htmlFor="inputTag" className={style.label} >
                        {!input.img && <div className={style.label__selectImg}>
                            Select image
                            <CameraAltIcon />
                        </div>}
                        <input className={style.file} accept="image/*" onChange={(e) => fileChange(e)} id="inputTag" type="file" />
                        {input.img ? <img className={style.fileImage} src={input.img} alt="test"></img> : ""}
                        <span id="imageName" ></span>
                    </label>
                </div>
                {backResponse?.msg && <span>{backResponse.msg} </span>}
                {/* {(btn && !backResponse) && <img src={loader} alt="loader"/> } */}
                {(btn && !backResponse) && <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={btn}
                    onClick={()=>setBtn(false)}
                >
                    <CircularProgress color="inherit" />
                </Backdrop> }

            <Button variant="contained" type="submit">Continue</Button>
        </form>
        </Container >
    )
}