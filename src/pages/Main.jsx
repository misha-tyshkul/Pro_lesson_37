import { useEffect, useState } from "react";
import { fetchUsers } from "../api/api";
import Users from "../components/Users";

export default function Main() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const usersList = users.map((user) => <Users key={user.id} item={user} />);

  return (
    <div>
      <h1>List users</h1>
      <ul>{usersList}</ul>
    </div>
  );
}
