import axios from "axios";
import { createContext, useEffect } from "react";
import React, { useState } from "react";
export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const [posts, setPosts] = useState([]);

  const loadposts = async () => {
    await axios
      .get(`/api/v1/posts`)
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    loadposts();
  }, [state]);

  return (
    <PostContext.Provider value={{ state, setState, posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
