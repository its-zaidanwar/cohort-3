import React from "react";

const UserCard = ({ users }) => {
  return (
    <div className="flex items-center justify-center bg-black py-10">

      <div className="w-72 bg-zinc-900 rounded-2xl p-6 shadow-xl border border-orange-500/30">

        <div className="flex flex-col items-center">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User"
            className="w-24 h-24 rounded-full object-cover border-4 border-orange-500"
          />

          <h2 className="text-white text-xl font-bold mt-4">
            {users.name}
          </h2>

          <p className="text-gray-400 mt-1">
            {users.email}
          </p>

        </div>

      </div>

    </div>
  );
};

export default UserCard;