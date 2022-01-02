import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/react_practice');
  };
  return (
    <div>
      <h2>404</h2>
      <p>Page not found</p>
      <button onClick={handleGoHome}>Go Home</button>
    </div>
  );
};

export default Page404;
