import React, { FC, useState } from "react";

import classes from "./photos.module.css";
import { Button, Select } from "../../atoms";
import { useFetchPhotosQuery } from "../../store/api";
import { useAppDispatch } from "../../hooks";
import { logOut } from "../../store/user";
import { deleteSessionFromCache } from "../../utils";
import { PhotoCard } from "../../organisms";
import { Photo } from "../../types";

const getSkeletonPhotos = (number: number): Photo[] => {
  const skeletonImage: Omit<Photo, "id"> = {
    author: "",
    download_url: "https://i.pinimg.com/564x/0f/f1/86/0ff18659fe7fa2473a8eb11869822ac0.jpg",
    height: 0,
    width: 0,
    url: "https://i.pinimg.com/564x/0f/f1/86/0ff18659fe7fa2473a8eb11869822ac0.jpg",
  };

  return [...Array(number)].map((skeleton, i) => ({ ...skeletonImage, id: i.toString() }));
};

const PhotosPage: FC = () => {
  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const { data = [], isFetching } = useFetchPhotosQuery({ limit, page });

  const photos = isFetching ? getSkeletonPhotos(limit) : data;

  const handleLogoutClick = () => {
    dispatch(logOut());
    deleteSessionFromCache();
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>🤳 Photux</h1>
        <Button size="sm" onClick={handleLogoutClick}>
          Log out
        </Button>
      </header>

      <main className={classes.photos}>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </main>

      <footer className={classes.footer}>
        <Select
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value))}
          options={["6", "12", "18", "24"].map((option) => ({ label: option, value: option }))}
        />
        <div className={classes.buttons}>
          <Button disabled={page === 1} size="sm" onClick={() => setPage((page) => page - 1)}>
            Prev
          </Button>
          <Button size="sm" onClick={() => setPage((page) => page + 1)}>
            Next
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default PhotosPage;
