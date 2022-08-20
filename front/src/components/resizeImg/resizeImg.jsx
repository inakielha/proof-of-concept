import { Alert, Button, Snackbar } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardPhoto from "../card/card";
import style from "./resize.module.css"

export default function ResizeImg() {
    const [open, setopen] = useState(false)
    const response = useSelector((state) => state.response);
    return (
        <Container>
            <div className={style.imageContainer}>
                <CardPhoto setopen={setopen} width="400px" heigth="300px" alt={"large"} imagen={response.allImages.largeImg} name="400x300" url={response.allImages.largeImg} />

                <CardPhoto setopen={setopen} width="160px" heigth="120px" alt={"medium"} imagen={response.allImages.mediumImg} name="160x120" url={response.allImages.mediumImg} />

                <CardPhoto setopen={setopen} width="120px" heigth="120px" alt={"small"} imagen={response.allImages.smallImg} name="120x120" url={response.allImages.smallImg} />
            </div>
            <div className={style.linkContainer}>
                <Link className={style.link} to="/">
                    <Button variant="contained">
                        Go Back
                    </Button>
                </Link>
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={()=>setopen(false)}>
                <Alert onClose={()=>setopen(false)} severity="success">
                    URL Copy to Clipboard!
                </Alert>
            </Snackbar>
        </Container>
    )
}