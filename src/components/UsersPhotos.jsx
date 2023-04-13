export default function UsersPhotos(props) {
  return (
    <>
      <li>
        <img src={props.item.url} alt={props.item.title}></img>
      </li>
    </>
  );
}
