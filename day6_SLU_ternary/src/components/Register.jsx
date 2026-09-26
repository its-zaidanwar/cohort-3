import React, { useState } from "react";

const Register = ({ setToggle, setUsers }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  let hangeleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handelSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form
        onSubmit={handelSubmit}
        action=""
        className="bg-white w-[400px] p-8 rounded-2xl shadow-xl flex flex-col "
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Register
        </h1>

        <input
          required
          value={formData.name}
          name="name"
          onChange={hangeleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200"
          type="text"
          placeholder="Full Name"
        />

        <input
          required
          value={formData.email}
          name="email"
          onChange={hangeleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200"
          type="text"
          placeholder="Email"
        />

        <input
          required
          value={formData.password}
          name="password"
          onChange={hangeleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200"
          type="text"
          placeholder="Password"
        />

        <button className="bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-200">
          Register
        </button>

        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-red-500 font-semibold cursor-pointer hover:underline"
          >
            login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
