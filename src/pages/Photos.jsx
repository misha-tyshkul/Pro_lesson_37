import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPhotos } from "../api/api";
import UsersPhotos from "../components/UsersPhotos";

export default function Albums() {
  const [photos, setPhotos] = useState([]);
  const params = useParams();

  const getPhotos = async (id) => {
    const { data } = await fetchPhotos(id);
    setPhotos(data);
  };

  useEffect(() => {
    getPhotos(params.id);
  });

  const photosList = photos.map((photo) => <UsersPhotos key={photo.id} item={photo} />);

  return (
    <div>
      <h1>Photo</h1>
      <div>
        <ul>{photosList}</ul>
      </div>
    </div>
  );
}
