
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
      <div className="w-1/2 bg-slate-200 border-2 gap-x-2 rounded-full py-2 px-3 flex justify-center items-center">
        <input
          type="search"
          className="w-full pl-3 bg-inherit focus:outline-none"
          placeholder="Search people..."
          value={search}
          onChange={(e) => handleSearch(e)}
        />

        <i className="fa fa-search  cursor-pointer"></i>
      </div>
    </>
  );
}

export default Search;
