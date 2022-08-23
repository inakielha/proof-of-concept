const { Router } = require('express');
const router = Router();
const cloudinary = require("../tools/cloudinary")
const jwt = require("express-jwt")
const jwkrsRsa = require ("jwks-rsa");
const authorizeAccesToken = require("../tools/authorizeAccesToken")

router.post("/",authorizeAccesToken,async (req, res) => {
    try {
        const { type, img, size } = req.body;
        if(!type || !img || !size) return res.json({ok:false, msg: "Missing info"})

        if (!type.endsWith("png") && !type.endsWith("jpeg")) return res.json({ok:false, msg:"You must send a PNG or JPEG file"})
       
        // CONVERT BYTES TO KILOBYTES 1KB = 1024 BYTES
        let fileSizeKb = size /1024;
        // CONVERT THE KB TO MB 1MB = 1024 KB
        const fileMB = fileSizeKb/ 1024;

        if(fileMB > 5) return res.json({ok:false, msg: "File size must be lower than 5MB"})
        let allImages = {}
        
        const resultLargeImg = await cloudinary.uploader.upload(img,{
            folder: "resizeTest",
            width: 400,
            height: 300
        })
        allImages.largeImg = resultLargeImg.url;


        const resultMediumImg = await cloudinary.uploader.upload(img,{
            folder: "resizeTest",
            width: 160,
            height: 120
        })
        allImages.mediumImg = resultMediumImg.url;

        const resultSmallImg = await cloudinary.uploader.upload(img,{
            folder: "resizeTest",
            width: 120,
            height: 120
        })
        allImages.smallImg = resultSmallImg.url;

        return res.json({ok:true,allImages});

    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
})
module.exports = router