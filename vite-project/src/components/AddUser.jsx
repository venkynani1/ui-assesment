import React from "react";
import axios from "axios";
import { useState } from "react";
import "./user.css"
import { useNavigate } from "react-router";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [CompanyName, setcompanyName] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    let user = {
      name: name,
      email: email,
      phone: phone,
      CompanyName: CompanyName,
    };

    let response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      user
    );
    console.log(response.data);
    navigate("/");
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-header bg-light text-dark">
                <h4 >Add New User</h4>
              </div>
              <div className="card-body">
                <form onSubmit={submit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="number"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={CompanyName}
                      onChange={(e) => setcompanyName(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className=" btn btn-blue w-40">
                      Add User
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
