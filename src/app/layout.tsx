"use client"
import { ReactNode, useEffect, useState } from 'react';
import MasterLayout from './layouts/backend/MasterLayout';
import AuthMasterLayout from './layouts/auth/AuthMasterLayout';


function checkAuth() {
  // Replace this with your actual authentication check logic
  return localStorage.getItem('authToken') !== null;
}

export default function Layout({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(checkAuth());
  }, []);

  return (
    <>
      {isAuthenticated ? (
      <MasterLayout>
        {children}
      </MasterLayout>
      ) : (
      <AuthMasterLayout>
        {children}
      </AuthMasterLayout>
      )}
    </>
  );
}