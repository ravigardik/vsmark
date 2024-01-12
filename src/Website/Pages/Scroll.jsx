import React, { useEffect, useState } from "react";
import Authuser from "../Aauthentication/Authuser";
import { Form, useParams } from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import Slider from "react-slick";

const Scroll = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchInput = (event) => {
    const input = event.target.value;
    setSearchTerm(input);

    // Replace the following with your actual suggestion logic
    // For example, you can fetch suggestions from an API based on the input
    const mockSuggestions = ["suggestion 1", "suggestion 2", "suggestion 3"];
    const filteredSuggestions = mockSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSearch = () => {
    // Perform the search functionality based on the searchTerm
    // Replace the following with your actual search logic
    alert("Performing search for: " + searchTerm);
  };
  return (
    <>
      {/* <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInput}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
        {suggestions.length > 0 && (
          <div>
            {suggestions.map((suggestion, index) => (
              <div key={index}>{suggestion}</div>
            ))}
          </div>
        )}
      </div> */}
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInput}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
        {suggestions.length > 0 && (
          <div>
            {suggestions.map((suggestion, index) => (
              <div key={index}>{suggestion}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Scroll;
