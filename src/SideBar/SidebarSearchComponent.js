import { useState } from "react";
import $ from "jquery";
import { Search } from "../SideBar/SearchFunction";

const SidebarSearchComponent = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleSearch = async (e) => {
    if (e.target.value.trim()) {
      await Search(e, e.target.value);
    } else {
      $("#searched-users").remove();
    }
  };
  return (
    <form className="app-search d-none d-lg-block" id="user-search-form">
      <div className="position-relative">
        <input
          type="text"
          className="form-control"
          placeholder="Search users..."
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
        />
        <span className="bx bx-search-alt"></span>
      </div>
      {/* <div className="search-result-div" id="searched-users"></div> */}
    </form>
  );
};
