import React from "react";
import "./SwipeButtons.css";
import {
  Replay as ReplayIcon,
  Close as CloseIcon,
  StarRate as StarRateIcon,
  Favorite as FavoriteIcon,
  FlashOn as FlashOnIcon,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons({ click }) {
  
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat" onClick={ ()=>click() } >
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
