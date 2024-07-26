import React, { useEffect, useState } from "react";
import { fetchAlbumPhotos } from "../services/api";
import { useParams } from "react-router-dom";
import "../App.css"; // Import your CSS file

const AlbumPhotos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      const response = await fetchAlbumPhotos(albumId);
      setPhotos(response.data);
    };
    getPhotos();
  }, [albumId]);

  return (
    <div>
      <div className="album-title">
        <h2>Album Photos</h2>
      </div>
      <ul className="photo-list m">
        {photos.map((photo) => (
          <li className="photo-item" key={photo.id}>
            <img
              className="photo-image"
              src={photo.thumbnailUrl}
              alt={photo.title}
            />
            <p className="photo-title">{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumPhotos;
