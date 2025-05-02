import { Routes, Route, NavLink } from "react-router-dom";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <NavLink className="navbar-brand" to="/users">User Dashboard</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/users" className="nav-link">User List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add-user" className="nav-link">Add User</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
