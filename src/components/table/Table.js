import React, { useState, Fragment } from "react";
import "../../scss/components/table/table.scss";
import Tooltip from "@material-ui/core/Tooltip";
import Pagination from "@material-ui/lab/Pagination";

import { useSelector } from "react-redux";

export default function TableComponent({
  setToggleSideBarRight,
  setToggleAppOverlay,
  setSingleTherapistId,
}) {
  const [pageIndex, setPageIndex] = useState(0);
  const currentTherapistView = useSelector((state) => {
    const startIndex = pageIndex * 10;
    const endIndex = startIndex + 10;
    return (
      state.main.allTherapists &&
      state.main.allTherapists.slice(startIndex, endIndex)
    );
  });
  const numberOfPage = useSelector((state) =>
    Math.floor(state.main.allTherapists && state.main.allTherapists.length / 10)
  );

  const getSpecializationsView = (specializations) => {
    const isExtended = specializations.length > 3;
    const dots = isExtended ? <span>...</span> : null;
    return (
      <>
        {specializations.slice(0, 3).map((e, index) => (
              <Fragment key={index}>
                <span>{e}</span>
                {index < 2 ? ", " : ""}
              </Fragment>
            ))}
        {dots}
      </>
    );
  };

  const openSideBarRight = (therapistId) => {
    setSingleTherapistId(therapistId);
    setToggleAppOverlay(true);
    setToggleSideBarRight(true);
  };

  return (
    <div className="tableComponent">
      <div className="tableComponent_wrapper">
        <div className="tableComponent_header">
          <div className="tableComponent_header--specialist">
            <span>Specjalista</span>
          </div>
          <div className="tableComponent_header--specialization">
            <span>Specjalizacje</span>
          </div>
        </div>
        {currentTherapistView.map((e, i) => {
          return (
            <div key={i} className="table">
              <div className="table_info">
                <div className="table_info--avatar">
                  <img src={e.avatarUrl} />
                </div>
                <div className="table_info--name">{e.fullName}</div>
              </div>
              <Tooltip
                title={e.specializations.map((e, index) => (
                  <Fragment key={index}>
                    <span>{e}</span>
                    {index ? ", " : ""}
                  </Fragment>
                ))}
                disableHoverListener={e.specializations.length < 4}
                arrow
                placement="top"
              >
                <div
                  className="table_info--specializations"
                  onClick={() => openSideBarRight(e.therapistId)}
                >
                  {getSpecializationsView(e.specializations)}
                </div>
              </Tooltip>
            </div>
          );
        })}
        <Pagination
          count={numberOfPage}
          page={pageIndex + 1}
          onChange={(_, page) => setPageIndex(page - 1)}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
}
