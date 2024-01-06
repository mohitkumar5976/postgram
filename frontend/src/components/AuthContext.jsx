import { createContext, useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([]);
  const [following,setFollowing]= useState([])
  const [followers,setFollowers] = useState([])
  const [load, setLoad] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  const handleChange = () => {
    setSearchedData([]);
  };

  const login = async (email, password) => {
    return await axios
      .post("/api/v1/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        return res.status;
      })
      .catch((err) => {
        return err.message;
      });
  };

  const getUser = async () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    try {
      await axios
        .get(`/api/v1/users/${userData.id}`)
        .then((res) => {
          setUserInfo(res.data.user);
          setFollowing(res.data.user.following)
          setFollowers(res.data.user.followers)
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error.message);
    }
  };

  const loadUsers = async () => {
    try {
      await axios
        .get(`/api/v1/users`)
        .then((res) => {
          setUsers(res.data.data);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, [load]);

  return (
    <AuthContext.Provider
      value={{
        handleChange,
        searchedData,
        setSearchedData,
        users,
        setUsers,
        login,
        userInfo,
        setUserInfo,
        load,
        setLoad,
        following,followers
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
