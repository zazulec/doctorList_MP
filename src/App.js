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
  const [singleTherapistId, setSingleTherapistId] = useState("");
  const allTherapist = useSelector((state) => state.main.allTherapists);
  const dispatch = useDispatch();

  const closeModals = () => (
    setToggleAppOverlay(false),
    setToggleSideBarRight(false),
    setToggleMainModal(false)
  )

  useEffect(() => {
    dispatch(fetchTherapistsData());
  }, [dispatch]);

  return (
    <>
      {toggleAppOverlay === false ? null : (
        <AppOverlay closeModals={closeModals}>
          {toggleMainModal === false ? null : (
            <MainModal
              setToggleMainModal={setToggleMainModal}
              setToggleSideBarRight={setToggleSideBarRight}
              setToggleAppOverlay={setToggleAppOverlay}
              singleTherapistId={singleTherapistId}
            />
          )}
          {toggleSideBarRight === false ? null : (
            <SideBarRight
              setToggleAppOverlay={setToggleAppOverlay}
              setToggleMainModal={setToggleMainModal}
              setToggleSideBarRight={setToggleSideBarRight}
              singleTherapistId={singleTherapistId}
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
            setSingleTherapistId={setSingleTherapistId}
          />
        )}
      </AppLayout>
    </>
  );
}

export default App;
