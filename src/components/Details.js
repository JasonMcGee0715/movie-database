import React, { useState } from "react";
import "./Details.css";
import Cast from "./Cast";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Details({ movie, idx }) {
  //   const [toggle, SetToggle] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [like, Setlike] = useState(null);
  const [dislike, SetDislike] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLike = () => {
    Setlike(like + 1);
  };

  const handleDislike = () => {
    SetDislike(dislike + 1);
  };

  //   const handleToggle = () => {
  //     SetToggle(!toggle);
  //   };

  return (
    <div className="details-container">
      <button type="button" onClick={handleOpen}>
        Details
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        style={{ width: "50%", left: "25%" }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="toggled-info">
              <div>
                <div>
                  <span>Original Title: </span>
                  {movie.original_title}
                </div>
                <br />
                <div>
                  <span>Released: </span> {movie.release_date}
                </div>
                <br />
                <div>
                  <span>Summary: </span>
                  {movie.overview}
                </div>
                <br />
                <div>
                  <span>Voter Rating: </span>
                  {movie.vote_average}
                </div>
                <br />
                <div>
                  <span>Votes Counted: </span>
                  {movie.vote_count}
                </div>
              </div>
              <br />
              <div className="likesAndDislikes">
                <div className="likesContainer">
                  <button onClick={handleLike}>Like </button>
                  <span>{like}</span>
                </div>
                <div className="dislikesContainer">
                  <button onClick={handleDislike}>Hate </button>
                  <span>{dislike}</span>
                </div>
              </div>
              <div className="cast-info">
                <h4>Cast: </h4>
                <Cast movie={movie} index={idx} />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
