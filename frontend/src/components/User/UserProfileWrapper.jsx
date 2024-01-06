import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import Sidebar from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";

export default function UserProfileWrapper() {
  const [userData, setUserData] = useState([]);

  const { id } = useParams();
  const loadposts = async () => {
    await axios
      .get(`/api/v1/users/${id}`)
      .then((res) => {
        setUserData(res.data.user);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    loadposts();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 flex justify-center pt-2 h-screen">
        <div className="w-5/6 flex gap-2">
          <Sidebar userData={userData} />
          <Outlet />
        </div>
      </div>
    </>
  );
}
