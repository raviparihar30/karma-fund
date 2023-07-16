import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

export default function MediaCard({ title, subTitle, image, user, userImage }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 240 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subTitle}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="d-flex align-items-center">
          <Avatar
            alt="RRR"
            src={userImage}
            sx={{ width: 30, height: 30, marginRight: "8px" }}
          />
          By <b className="ms-2">{user}</b>
        </div>
      </CardActions>
    </Card>
  );
}
