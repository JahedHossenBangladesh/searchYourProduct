import React from 'react';

const Search = ({placeholder,handleChange}) => {
    return (
       
              <input type="search" placeholder={placeholder} onChange={handleChange}  className="search" />
      
    );
};

export default Search;