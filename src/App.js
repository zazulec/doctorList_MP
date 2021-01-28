import React, { useEffect, useState } from "react";
import AppLayout from "./components/layouts/AppLayout";
import TableComponent from "./components/table/Table";
import AppOverlay from "./components/layouts/AppOverlay";
import SideBarRight from "./components/sideBarRight/SideBarRight";
import { MainModal } from "./components/mainModal/MainModal";

import { useDispatch, useSelector } from "react-redux";
import { fetchTherapistsData } from "./actions/mainActions";

function App() {
  const [toggleAppOverlay, setToggleAppOverlay] = useState(false);
  const [toggleSideBarRight, setToggleSideBarRight] = useState(false);
  const [toggleMainModal, setToggleMainModal] = useState(false);
  const allTherapist = useSelector((state) => state.main.allTherapists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTherapistsData());
  }, [dispatch]);
  
  return (
    <>
      {toggleAppOverlay === false ? null : (
        <AppOverlay>
          {toggleMainModal === false ? null : (
            <MainModal setToggleMainModal={setToggleMainModal} setToggleSideBarRight={setToggleSideBarRight} setToggleAppOverlay={setToggleAppOverlay}/>
          )}
          {toggleSideBarRight === false ? null : (
            <SideBarRight
              setToggleAppOverlay={setToggleAppOverlay}
              setToggleMainModal={setToggleMainModal}
              setToggleSideBarRight={setToggleSideBarRight}
            ></SideBarRight>
          )}
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
          <TableComponent
            setToggleSideBarRight={setToggleSideBarRight}
            setToggleAppOverlay={setToggleAppOverlay}
          />
        )}
      </AppLayout>
    </>
  );
}

export default App;
