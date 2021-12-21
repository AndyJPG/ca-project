import React from 'react';
import {AppContextProvider} from "./context/AppContextProvider";
import Buy from "./components/Buy";

function App() {
  return (
    <AppContextProvider>
      <Buy />
    </AppContextProvider>
  );
}

export default App;
