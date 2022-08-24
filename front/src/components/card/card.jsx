import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {IconButton } from '@mui/material';

export default function CardPhoto(props) {
  function handleClick(){
    navigator.clipboard.writeText(props.url)
    props.setopen(true)
  }
  return (
    <Card sx={{ maxWidth: props.width, width: "100%" , margin: "3em", height:"auto" }}>
      <CardMedia
        component="img"
        alt= {props.alt}
        height= "auto"
        image= {props.imagen}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{overflowX:"scroll", display:"flex", alignItems:"center",textAlign:"center", height:"auto"}}   variant="body2" color="text.secondary">
          <IconButton onClick={handleClick}>
          <ContentCopyIcon fontSize='medium'/>
          {props.url}
          </IconButton>
        </Typography>
      </CardContent>
    </Card>
  );
}
