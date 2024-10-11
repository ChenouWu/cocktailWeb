import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const searchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`; // 使用名称作为 endpoint

// loader function to fetch drinks by name
export const loaderForName = async ({ params }) => {
  const { name } = params; // 从路径参数中获取 name
  const { data } = await axios.get(`${searchUrl}${name}`); // 根据名称查询鸡尾酒
  return { data }; // 返回数据
};

const SearchingForm = () => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/searching/${query}`); // Navigate to the search results page
      setQuery(''); // Clear the input
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        placeholder="Search for a cocktail..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-3 py-2 rounded-md text-gray-800"
      />
      <button type="submit" className="ml-2 px-3 py-2 bg-blue-600 text-white rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchingForm;
