import React from "react";

const ProfileClickCard = ({ name, email }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="absolute right-0 z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700">
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">
          {name}
        </span>
        <span className="block truncate text-sm text-gray-500 dark:text-gray-100">
          {email}
        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <div
            onClick={handleLogout}
            className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Log out
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProfileClickCard;
