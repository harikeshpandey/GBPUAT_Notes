import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '../components/Box';
import Breadcrumb from '../components/Breadcrumb';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import { collegeData } from '../data/collegeData';

const Year = () => {
  const { id, deptId, yearId } = useParams();
  const [loading, setLoading] = useState(true);

  const college = collegeData[id];
  const department = college.departments[deptId];
  const year = department.years[yearId];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loading />;

  const handleCourseClick = (driveLink) => {
    window.open(driveLink, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'Home', link: '/' },
          { label: college.name, link: `/college/${id}` },
          { label: department.name, link: `/college/${id}/department/${deptId}` },
          { label: year.name }
        ]} 
      />
      <BackButton />
      <h1 className="text-4xl font-bold mb-8 text-center">{year.name} Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {year.courses.map((course, index) => (
          <Box key={index} onClick={() => handleCourseClick(course.driveLink)}>
            {course.courseName}
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Year;