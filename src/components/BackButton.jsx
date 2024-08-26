import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark transition-colors"
    >
      ← Back
    </button>
  );
};

export default BackButton;