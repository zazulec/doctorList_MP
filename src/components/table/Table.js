import React, { useState } from "react";

import { useSelector } from "react-redux";

export default function TableComponent() {
  const [currentSite, setCurrentSite] = useState(1);
  const currentTherapistView = useSelector(
    (state) => state.main && state.main.allTherapists[currentSite]
  );
  console.log(currentTherapistView)
  return (
    <div className="tableComponent">
      <table className="table_header">
        <tbody>
          <tr>
            <th>Specjalista</th>
            <th>Specjalizacje</th>
          </tr>
          {currentTherapistView.map((e, i) => {
            return (
              <tr key={i} className="table_therapist">
                <td className="table_therapist--info">
                  <img src={e.avatarUrl} alt="therapistAvatar"></img>
                  <p>{e.fullName}</p>
                </td>
                <td className="table_therapist--specializations">
                    {e.specjalizations}
                  {/* {e.specializations.length > 3
                    ? (e[0], e[1], e[2] + "...")
                    : e.map((specjalization) => <span>{specjalization}</span>)} */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
