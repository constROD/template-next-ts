import React from 'react';
import { useUserStore } from 'shared/store';

export const About: React.FC = () => {
  const logout = useUserStore(state => state.logout);

  const handleLogout = () => logout();

  return (
    <div>
      This is About Page. <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
