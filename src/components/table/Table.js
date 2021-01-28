import React, { useState, Fragment } from "react";
import "../../scss/components/table/table.scss";
import Tooltip from "@material-ui/core/Tooltip";
import Pagination from "@material-ui/lab/Pagination";

import { useSelector } from "react-redux";

export default function TableComponent({
  setToggleSideBarRight,
  setToggleAppOverlay,
}) {
  const [pageIndex, setPageIndex] = useState(7);
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
    const isExtended = specializations.length >= 3;
    const dots = isExtended ? <span>...</span> : null;
    return (
      <Fragment>
        {isExtended === true
          ? specializations.slice(0, 3).map((e, index) => (
              <Fragment key={index}>
                <span>{e}</span>
                {index !== specializations.length - 1 ? ", " : ""}
              </Fragment>
            ))
          : specializations.map((e, index) => (
              <Fragment key={index}>
                <span>{e}</span>
                {index !== specializations.length - 1 ? ", " : ""}
              </Fragment>
            ))}
        {dots}
      </Fragment>
    );
  };

  //   const getSpecializationsView =  useCallback(
  //     (specializations) => {
  //        const isExtended = specializations.length >= 3;
  //        const dots = isExtended ? <span>...</span> : null;
  //        return (
  //          <Fragment>
  //            {isExtended === true
  //              ? specializations.slice(0, 3).map((e, index) => (
  //                  <Fragment key={index}>
  //                    <span>{e}</span>
  //                    {index !== specializations.length - 1 ? ", " : ""}
  //                  </Fragment>
  //                ))
  //              : specializations.map((e, index) => (
  //                  <Fragment key={index}>
  //                    <span >{e}</span>
  //                    {index !== specializations.length - 1 ? ", " : ""}
  //                  </Fragment>
  //                ))}
  //            {dots}
  //          </Fragment>
  //        );
  //      }
  //    ),
  //    [input],
  //  )
  const openSideBarRight = () => {
    setToggleAppOverlay(true);
    setToggleSideBarRight(true);
  };

  return (
    <div className="tableComponent">
      <div className="tableComponent_wrapper">
        <div className="tableComponent_header">
          <div className="tableComponent_header--specialist">Specjalista</div>
          <div className="tableComponent_header--specialization">
            Specjalizacja
          </div>
        </div>
        {currentTherapistView.map((e, i) => {
          return (
            <div key={i} className="table">
              <div className="table_info">
                <div className="table_info--avatar">
                  <img src={e.avatarUrl} alt="therapistAvatar" />
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
                arrow
                placement="top"
              >
                <div
                  className="table_info--specializations"
                  onClick={() => openSideBarRight()}
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
          onChange={() => setPageIndex()}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
}
