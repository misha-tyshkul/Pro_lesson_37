import { Link } from "react-router-dom";

export default function Users(props) {
  return (
    <>
      <li key={props.id}>{props.item.name}</li>
      <Link to={`/albums/${props.item.id}`}>Album</Link>
    </>
  );
}
