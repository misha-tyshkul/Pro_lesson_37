import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAlbums } from "../api/api";

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const params = useParams();

  const getAlbums = async (id) => {
    const { data } = await fetchAlbums(id);
    setAlbums(data);
  };

  useEffect(() => {
    getAlbums(params.id);
  });

  const albumsList = albums.map((album) => (
    <div>
      <div key={album.id}>{album.title}</div>
      <Link to={`/albums/photos/${album.id}`}>Photos</Link>
    </div>
  ));
  return (
    <div>
      <h1>List albums</h1>
      <ul>{albumsList}</ul>
    </div>
  );
}
