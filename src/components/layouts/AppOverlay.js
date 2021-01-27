import React  from 'react';
import '../../scss/layouts/appOverlay.scss';

export default function AppOverlay({children}) {
    return (
        <div className="appOverlay">
            {children}
        </div>
    )
}
