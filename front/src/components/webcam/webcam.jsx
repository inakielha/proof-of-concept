import { Button } from '@mui/material';
import React, { Component, useCallback, useRef, useState } from 'react';
import Webcam from "react-webcam";

export default function Webcamera({ setInput }) {
    const [image, setImage] = useState('');
    const videoConstraints = {
        width: 220,
        height: 200,
        facingMode: "user"
    };
    const webcamRef = useRef(null);

    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setInput({
                type: "/jpeg",
                img: imageSrc,
                size: "500"
            })
        },

        [webcamRef]
    );

    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ?
                    <Webcam
                        audio={false}
                        height={200}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={220}
                        videoConstraints={videoConstraints}
                    /> : <img src={image} />
                }
                <div style={{display:"flex",justifyContent:"center"}}>
                    {image != '' ?
                        <button onClick={(e) => {
                            e.preventDefault();
                            setImage('')
                        }}
                            className="webcam-btn">
                            Retake Image</button> :
                        <Button onClick={(e) => {
                            e.preventDefault();
                            capture();
                        }}
                        >Capture</Button>
                    }
                </div>
            </div>
        </div>
    );
}