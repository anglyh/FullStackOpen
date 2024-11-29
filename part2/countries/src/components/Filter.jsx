import React from "react";

const Filter = ({ searchQuery, handleSearchChange }) => {
  return (
    <>
      <label htmlFor="country-search">Find countries:</label>
      <input
        id="country-search"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </>
  );
};

export default Filter;
