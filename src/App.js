import React, { useState } from 'react';
import ThemeContext from './Context/ThemeContext';
import Dashboard from './Components/Dashboard';

function App() {
  const defaultTheme = useState("light")

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <Dashboard />
    </ThemeContext.Provider>
  );
}

export default App;
