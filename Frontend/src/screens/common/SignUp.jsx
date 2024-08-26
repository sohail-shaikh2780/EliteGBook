import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("MANAGER");
  const history = useHistory();

  const addUser = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      address === "" ||
      dob === "" ||
      phone === ""
    ) {
      alert("Fields cannot be empty");
    } else {
      let data = {
        firstName,
        lastName,
        email,
        dob,
        phoneNo: phone,
        address,
        password,
        role,
      };
      console.log(data);

      axios.post(url + "/manager/add/", data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("Successfully registered");
          history.push("/login");
        } else {
          alert("Email already exists");
        }
      });
    }
  };

  return (
    <>
      <Navbar />
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Sign Up</h2>
        <form>
          <div className="form-group row mb-3">
            <label htmlFor="fname" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fname"
                placeholder="First Name"
                onChange={(event) => setFname(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="lname" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="lname"
                placeholder="Last Name"
                onChange={(event) => setLname(event.target.value)}
                required
                />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="dob" className="col-sm-2 col-form-label">
              DOB
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                id="dob"
                onChange={(event) => setDob(event.target.value)}
                required
                />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                required
                />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                required
                />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
                onChange={(event) => setAddress(event.target.value)}
                required
                />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="phone" className="col-sm-2 col-form-label">
              Contact Number
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Phone Number"
                onChange={(event) => setPhone(event.target.value)}
                required
                />
            </div>
          </div>

          <div className="form-group row mb-4">
            <label htmlFor="role" className="col-sm-2 col-form-label">
              Role
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="role"
                value="MANAGER"
                disabled
                /> 

            {/* <label htmlFor="role">Choose the role:</label>
            <select id="role" value={role} onChange={handleChange}>
                <option value="">--Select a role--</option>
                <option value="MANAGER">MANAGER</option>
                <option value="TRAINER">TRAINER</option>
                <option value="USER">USER</option>
            </select> */}
            </div>
          </div>

          <div className="text-center">
            <button type="button" className="btn btn-primary me-2" onClick={addUser}>
              Register
            </button>
            <Link to="/login">
              <button type="button" className="btn btn-secondary">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
                </>
  );
};

export default SignUp;
