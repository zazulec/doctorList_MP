import React, { useEffect, useState } from "react";
import AppLayout from "./components/layouts/AppLayout";
import TableComponent from "./components/table/Table";

import { useDispatch, useSelector } from "react-redux";
import { fetchTherapistsData } from "./actions/mainActions";
import AppOverlay from "./components/layouts/AppOverlay";
import SideBarRight from "./components/sideBarRight/SideBarRight";

function App() {
  const [toggleAppOverlay, setToggleAppOverlay] = useState(true);
  const allTherapist = useSelector((state) => state.main.allTherapists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTherapistsData());
  }, [dispatch]);
  return (
    <>
      {!toggleAppOverlay ? null : (
        <AppOverlay>
          <SideBarRight
            setToggleAppOverlay={setToggleAppOverlay}
          ></SideBarRight>
        </AppOverlay>
      )}
      <AppLayout>
        {allTherapist === null ? (
          <div
            className="loader"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
        ) : (
          <TableComponent />
        )}
      </AppLayout>
    </>
  );
}

export default App;
