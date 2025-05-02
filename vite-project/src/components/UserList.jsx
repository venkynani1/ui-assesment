import axios from "axios";  //for the http requests 
import { useEffect, useState } from "react"; //for the state and effect hooks

function UserList() {  //displayf the list of users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getTheUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (err) {
        console.log("Failed to fetch users:", err);
      }
    };
    getTheUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } catch (err) {
      console.log("Failed to delete user:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">User List</h2>
      <table className="table   table-bordered ">
        <thead >
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company?.name}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
