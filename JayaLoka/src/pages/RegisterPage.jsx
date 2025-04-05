import React, { useState } from "react";
import "../styles/auth.css";


const RegisterForm = () => {
  const [isCampusUser, setIsCampusUser] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Tentukan role berdasarkan toggle
    let role;
    if (isCampusUser) {
      role = "civitas";
    } else {
      role = "guest";
    }

    formData.append("role", role);

    // Debug: tampilkan semua data form
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    // Proses kirim ke backend di sini...
  };

 
  let campusInputs = (
    <div>
      <input type="text" name="nimnip" placeholder="NIM/NIP" required />
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
    </div>
  );

 
  let guestInputs = (
    <div>
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
    </div>
  );

  return (
    <div className="auth-container">
      <h2>Register</h2>

      <div className="role-toggle">
        <button
          type="button"
          onClick={() => setIsCampusUser(false)}
          className={isCampusUser === false ? "active" : ""}
        >
          Guest
        </button>
        <button
          type="button"
          onClick={() => setIsCampusUser(true)}
          className={isCampusUser === true ? "active" : ""}
        >
          Campus User
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {isCampusUser === true ? campusInputs : guestInputs}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
