import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((users) => setUsers(users));

    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // delete user
  const deleteUser = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <table className="table border shadow">
            <thead className="thead-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>
                    <Link
                      to={`/users/view/${user.id}`}
                      className="btn btn-info btn-sm"
                    >
                      View
                    </Link>
                    <Link
                      to={`/users/edit/${user.id}`}
                      className="btn btn-outline-primary mx-2 btn-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
