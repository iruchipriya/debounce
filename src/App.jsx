import React, { useState, useRef } from 'react';

const DebouncedSearch = () => {
  let counter = 0;
  const getData = () => {
    console.log('fetching', counter++);
  };

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearchRef = useRef(debounce(getData, 300));

  const handleChange = (event) => {
    if (debouncedSearchRef.current) {
      debouncedSearchRef.current(event.target.value);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
};

export default DebouncedSearch;
