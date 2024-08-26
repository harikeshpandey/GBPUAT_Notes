import { useParams, Link } from 'react-router-dom';
import Box from '../components/Box';
import Breadcrumb from '../components/Breadcrumb';
import BackButton from '../components/BackButton';
import { collegeData } from '../data/collegeData';

const Department = () => {
  const { id, deptId } = useParams();
  const college = collegeData[id];
  const department = college?.departments[deptId];

  if (!college || !department) {
    return <div>Department not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'Home', link: '/' },
          { label: college.name, link: `/college/${id}` },
          { label: department.name }
        ]} 
      />
      <BackButton />
      <h1 className="text-4xl font-bold mb-8 text-center">{department.name} Years</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {department.years.map((year) => (
          <Link className="text-accent hover:text-accent-light" key={year.id} to={`/college/${id}/department/${deptId}/year/${year.id}`}>
            <Box>{year.name}</Box>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Department;