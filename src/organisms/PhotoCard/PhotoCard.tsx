import React, { FC } from "react";

import classes from "./photo-card.module.css";
import { Photo } from "../../types";

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: FC<PhotoCardProps> = ({ photo }) => {
  return (
    <article key={photo.id}>
      <a href={photo.url} target="_blank" rel="noopener noreferrer" className={classes.link}>
        <img loading="lazy" src={photo.download_url} alt={photo.author} className={classes.image} />
      </a>
    </article>
  );
};

export default PhotoCard;
