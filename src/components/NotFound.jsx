import React from 'react';

const NotFound = () => {
    return (
        <React.Fragment>
            <div className="alert alert-warning" role="alert">
                Requested page was not found, maybe it's under construction?
            </div>
        </React.Fragment>
    );
}

export default NotFound