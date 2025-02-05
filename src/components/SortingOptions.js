import React from "react";

const SortingOptions = ({ setSortOrder }) => (
    <div>
        <label>Sort by: </label>
        <select onChange={(e) => setSortOrder(e.target.value)}>
            <option value="breed:asc">Breed (A-Z)</option>
            <option value="breed:desc">Breed (Z-A)</option>
            <option value="name:asc">Name (A-Z)</option>
            <option value="name:desc">Name (Z-A)</option>
        </select>
    </div>
);

export default SortingOptions;
