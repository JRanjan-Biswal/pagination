import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./card.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardPagination(props) {
//   console.log("CardPagination->", new Date(props.props.created_at));

  const [expanded, setExpanded] = useState(false);
  const data = props.props;
  const date = new Date(props.props.created_at).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="card">
      <div className="cardHeader">
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <Avatar
            alt={`${data.user.login}`}
            src={data.user.avatar_url}
            className="avatar"
            style={{marginRight: "1em"}}
          />
          <div className="userName"> {data.user.login} </div>
        </div>
        <div className="userDate">{`${date}`}</div>
      </div>

      <CardContent className="cardTitle">
        <Typography
          variant="body2"
          color="text.secondary"
          className="cardTitleTypo"
        >
          {data.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="expandButton">
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{data.body}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
