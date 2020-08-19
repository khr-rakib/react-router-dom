import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const getUserInfo = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(result.data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-4">
                <h4>User ID: {id}</h4>
                <Link to="/" className="btn btn-secondary">
                  Go Back
                </Link>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  {" "}
                  <strong>Name: </strong> {user.name}
                </li>
                <li className="list-group-item">
                  {" "}
                  <strong>Phone: </strong> {user.phone}
                </li>

                <li className="list-group-item">
                  {" "}
                  <strong>Email: </strong> {user.email}
                </li>

                <li className="list-group-item">
                  {" "}
                  <strong>Website: </strong> {user.website}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
