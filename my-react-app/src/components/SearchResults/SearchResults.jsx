import React, { useState, useCallback } from "react";

// import './SearchResults.css';    -> for future styling

import Tracklist from "../Tracklist/Tracklist.jsx";

const SearchResults = (props) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
    );
};

export default SearchResults;