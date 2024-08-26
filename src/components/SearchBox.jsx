// In src/components/Search.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { collegeData } from '../data/collegeData';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length < 3) {
      setResults([]);
      return;
    }

    const searchResults = collegeData.flatMap(college =>
      college.departments.flatMap(dept =>
        dept.years.flatMap(year =>
          year.courses
            .filter(course => course.name.toLowerCase().includes(term.toLowerCase()))
            .map(course => ({
              college,
              department: dept,
              year,
              course
            }))
        )
      )
    );

    setResults(searchResults);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for a course..."
        className="w-full p-2 border rounded"
      />
      {results.length > 0 && (
        <ul className="mt-4">
          {results.map((result, index) => (
            <li key={index} className="mb-2">
              <Link to={`/college/${result.college.id}/department/${result.department.id}/year/${result.year.id}`} className="text-blue-500 hover:underline">
                {result.course.name} - {result.college.name}, {result.department.name}, {result.year.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;