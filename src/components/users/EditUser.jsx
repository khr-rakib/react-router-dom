import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  const history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
  });

  const loadUserInfo = async () => {
    const resutl = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(resutl.data);
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  const { name, phone, email, website } = user;

  const onchangeForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    // fetch("https://jsonplaceholder.typicode.com/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application-json",
    //   },
    //   body: user,
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="mb-4">Edit User</h4>

              <form onSubmit={(e) => formSubmit(e)}>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => onchangeForm(e)}
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    name="phone"
                    placeholder="Enter your phone"
                    value={phone}
                    onChange={(e) => onchangeForm(e)}
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => onchangeForm(e)}
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    name="website"
                    placeholder="Enter your website url"
                    value={website}
                    onChange={(e) => onchangeForm(e)}
                  />
                </div>

                <button className="btn btn-warning btn-block">
                  Update User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
