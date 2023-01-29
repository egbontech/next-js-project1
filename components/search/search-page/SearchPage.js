import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Sponsored from "../../homepage/mainContainer/welcome/Sponsored";
import CategoryList from "../../market/MarketPage/CategoryList";
import SearchItemsList from "./Search-page/SearchItemsList";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const updateQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="main-content">
      <div className="profile-settings-container" style={{ padding: "0 15px" }}>
        <div className="search-input-container">
          <div className="input">
            <input
              type="text"
              placeholder="Search for products/services"
              onChange={updateQuery}
            />
            {query.trim().length > 0 && <AiOutlineSearch className="i" />}
          </div>
          {query.trim().length > 0 && <SearchItemsList />}
        </div>
        <div className="svg">
          <img src="/assets/images/waiting.svg" alt="profile-picture" />
        </div>
        <div className="waiting-to-search-text">
          <p>Search for anything</p>
        </div>
        <Sponsored />
        <div style={{ paddingBottom: "80px" }}>
          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
