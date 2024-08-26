// src/pages/Home.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '../components/Box';
import Breadcrumb from '../components/Breadcrumb';
import { collegeData } from '../data/collegeData';

const Search = ({ onSearch }) => (
  <input
    type="text"
    onChange={(e) => onSearch(e.target.value)}
    placeholder="Search for a college, department, or course..."
    className="w-full p-2 border rounded mb-4"
  />
);

const Home = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (term) => {
    if (term.length < 3) {
      setSearchResults(null);
      return;
    }

    const results = collegeData.flatMap(college =>
      college.departments.flatMap(dept =>
        dept.years.flatMap(year =>
          year.courses
            .filter(course => 
              course.name.toLowerCase().includes(term.toLowerCase()) ||
              college.name.toLowerCase().includes(term.toLowerCase()) ||
              dept.name.toLowerCase().includes(term.toLowerCase())
            )
            .map(course => ({
              college,
              department: dept,
              year,
              course
            }))
        )
      )
    );

    setSearchResults(results);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home' }]} />
      <h1 className="text-4xl font-bold mb-8 text-center text-white">College Notes Portal</h1>
      
      <Search onSearch={handleSearch} />

      {searchResults ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
          {searchResults.length === 0 ? (
            <p>No results found.</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((result, index) => (
                <li key={index}>
                  <Link className="text-accent hover:text-accent-light" to={`/college/${result.college.id}/department/${result.department.id}/year/${result.year.id}`}>
                    <Box>
                      <p className="font-semibold">{result.course.name}</p>
                      <p className="text-sm text-gray-600">{result.college.name}</p>
                      <p className="text-sm text-gray-600">{result.department.name}, {result.year.name}</p>
                    </Box>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">All Colleges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collegeData.map((college) => (
              <Link className="text-accent hover:text-accent-light" key={college.id} to={`/college/${college.id}`}>
                <Box>
                  <p className="font-semibold">{college.name}</p>
                  <p className="text-sm text-gray-600">{college.departments.length} Departments</p>
                </Box>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;