import { CloseButton } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../AuthContext";

function Search() {
  const [search, setSearch] = useState("");
  const { users, setSearchedData } = useContext(AuthContext);

  const handleSearch = async (e) => {
    setSearch(e.target.value);

    const usersData = users.filter((item) => {
      return item.name.includes(e.target.value);
    });

    setSearchedData(usersData);
  };

  return (
    <>
      <div className="bg-white rounded-full p-2 flex justify-center items-center">
        <input
          type="search"
          className="w-full pl-3 focus:outline-none"
          placeholder="Search people..."
          value={search}
          onChange={(e) => handleSearch(e)}
        />

        <i className="fa fa-search pr-2 cursor-pointer"></i>
      </div>
    </>
  );
}

export default Search;
