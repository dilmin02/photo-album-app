import React, { useEffect, useState } from "react";
import { fetchUsers, fetchUserAlbums, fetchAlbumPhotos } from "../services/api";
import { Link } from "react-router-dom";
import "../App.css"; // Ensure the path is correct based on your file structure

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({ users: 0, albums: 0, photos: 0 });

  useEffect(() => {
    const getData = async () => {
      const usersResponse = await fetchUsers();
      setUsers(usersResponse.data);
      setStats((prevState) => ({
        ...prevState,
        users: usersResponse.data.length,
      }));

      const albumsResponse = await fetchUserAlbums();
      setStats((prevState) => ({
        ...prevState,
        albums: albumsResponse.data.length,
      }));

      const photosResponse = await fetchAlbumPhotos();
      setStats((prevState) => ({
        ...prevState,
        photos: photosResponse.data.length,
      }));
    };
    getData();
  }, []);

  return (
    <div className="main">
      <div className="title">
        <h1>Photo Album App</h1>
      </div>
      <div className="stats list">
        <p>Total Users: {stats.users}</p>
        <p>Total Albums: {stats.albums}</p>
        <p>Total Photos: {stats.photos}</p>
      </div>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}/albums`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
