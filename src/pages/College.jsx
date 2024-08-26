// src/pages/College.js
import { useParams, Link } from 'react-router-dom';
import Box from '../components/Box';
import Breadcrumb from '../components/Breadcrumb';
import BackButton from '../components/BackButton';
import { collegeData } from '../data/collegeData';

const College = () => {
  const { id } = useParams();
  const college = collegeData.find(c => c.id === parseInt(id));

  if (!college) {
    return <div>College not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'Home', link: '/' },
          { label: college.name }
        ]} 
      />
      <BackButton />
      <h1 className="text-4xl font-bold mb-8 text-center">{college.name} Departments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {college.departments.map((dept) => (
          <Link className="text-accent hover:text-accent-light" key={dept.id} to={`/college/${id}/department/${dept.id}`}>
            <Box>
              <h3 className="text-lg font-semibold">{dept.name}</h3>
              <p className="text-sm text-gray-600">{dept.years.length} Years</p>
            </Box>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default College;