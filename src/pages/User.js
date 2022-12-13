import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/dataContext";

const User = () => {
  const { formData, setFormData } = useData();

  const savedData = JSON.parse(localStorage.getItem("data"));
  console.log(savedData);
  const { username, value } = savedData;
  return (
    <div className="home-body d-flex justify-content-center align-items-center">
      {localStorage.getItem("data") ? (
        <div className="content-box shadow p-5 bg-white rounded">
          <h4>Full Name</h4>
          <p className="ms-3 fw-bold">{username}</p>
          <h4>Sectors</h4>
          {value?.map((curVal, i) => {
            return (
              <li key={i} className="ms-3 mb-3">
                {curVal.key}
              </li>
            );
          })}
          <Link
            to="/"
            type="button"
            className="button me-2"
            onClick={() => {
              setFormData({ ...formData, username });
            }}
          >
            Edit
          </Link>
          <Link to="/" type="button" className="button">
            Back
          </Link>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default User;
