import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Import your Firebase configuration
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); 
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // ... rest of your component code ...
}