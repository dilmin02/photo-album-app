import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = () => axios.get(`${BASE_URL}/users`);
export const fetchUserAlbums = (userId) => axios.get(`${BASE_URL}/albums`, { params: { userId } });
export const fetchAlbumPhotos = (albumId) => axios.get(`${BASE_URL}/photos`, { params: { albumId } });
