import React from "react";
import "./style.css";

function Form() {
  return (
    <div className="container">
      <h1>User Registration Form</h1>

      <form>
        <div className="form-group">

          <div className="input-box">
            <label>First Name</label>
            <input type="text" placeholder="Enter First Name" required />
          </div>

          <div className="input-box">
            <label>Last Name</label>
            <input type="text" placeholder="Enter Last Name" required />
          </div>

          <div className="input-box">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" required />
          </div>

          <div className="input-box">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter Mobile Number" required />
          </div>

          <div className="input-box">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" required />
          </div>

          <div className="input-box">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" required />
          </div>

          <div className="input-box">
            <label>Date of Birth</label>
            <input type="date" required />
          </div>

          <div className="input-box">
            <label>Age</label>
            <input type="number" min="1" max="100" />
          </div>

          <div className="input-box">
            <label>Gender</label>

            <div className="gender">
              <label>
                <input type="radio" name="gender" /> Male
              </label>

              <label>
                <input type="radio" name="gender" /> Female
              </label>

              <label>
                <input type="radio" name="gender" /> Other
              </label>
            </div>
          </div>

          <div className="input-box">
            <label>Country</label>

            <select>
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>UK</option>
            </select>
          </div>

          <div className="input-box">
            <label>State</label>
            <input type="text" placeholder="Enter State" />
          </div>

          <div className="input-box">
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>

          <div className="input-box full-width">
            <label>Address</label>
            <textarea placeholder="Enter Full Address"></textarea>
          </div>

          <div className="input-box full-width">
            <label>Upload Profile Photo</label>
            <input type="file" />
          </div>

          <div className="input-box full-width">
            <label>Skills</label>

            <div className="skills">
              <label>
                <input type="checkbox" /> HTML
              </label>

              <label>
                <input type="checkbox" /> CSS
              </label>

              <label>
                <input type="checkbox" /> JavaScript
              </label>

              <label>
                <input type="checkbox" /> React
              </label>
            </div>
          </div>

          <div className="checkbox full-width">
            <input type="checkbox" required />
            <label>I accept Terms & Conditions</label>
          </div>

        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Form;