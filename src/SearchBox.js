import React from "react";

const SearchBox = ({ Searchfield, onChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b-green bg-lightest-blue"
        type="search"
        placeholder="searchRobos"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
