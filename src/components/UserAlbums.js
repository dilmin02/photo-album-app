import React, { useEffect, useState } from "react";
import { fetchUserAlbums } from "../services/api";
import { Link, useParams } from "react-router-dom";
import "../App.css"; // Ensure the path is correct based on your file structure

const UserAlbums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const response = await fetchUserAlbums(userId);
      setAlbums(response.data);
    };
    getAlbums();
  }, [userId]);

  return (
    <div className="main">
      <div className="title">
        <h2>User Albums</h2>
      </div>
      <ul className="users-list-two list m">
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/album/${album.id}/photos`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbums;
