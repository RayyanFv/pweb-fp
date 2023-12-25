import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDHZOmC3wqbu6oTllK2QOCUyLo4V2kX0vk",
  authDomain: "mychatapp-81ceb.firebaseapp.com",
  projectId: "mychatapp-81ceb",
  storageBucket: "mychatapp-81ceb.appspot.com",
  messagingSenderId: "186103250800",
  appId: "1:186103250800:web:1d3d4a377f81df0b7619b5",
  measurementId: "G-JRC0PPJ161"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup function
    return () => unsubscribe();
  }, [auth]);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
        </div>
      ) : (
        <p>User is not authenticated.</p>
      )}
    </div>
  );
}

export default App;
