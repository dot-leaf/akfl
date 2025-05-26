import { useEffect } from 'react';
import AlkhidmatRoutes from './routes/AlkhidmatRoutes';

function App() {
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }, [])
  return <AlkhidmatRoutes />;
}

export default App;