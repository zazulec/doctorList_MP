import React, { useEffect } from "react";
import AppLayout from "./components/layouts/AppLayout";

import { useDispatch } from 'react-redux'
import { fetchTherapistsData } from "./actions/mainActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTherapistsData())
  }, []);

  return (
    <div>
      <AppLayout>
      </AppLayout>
    </div>
  );
}

export default App;
