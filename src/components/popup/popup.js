import React from "react";
import Form from "./../form/form"

const Popup = ({lngLat, addPoint}) => {
    return (
        <>
            <Form addPoint={ addPoint } lngLat={ lngLat } />
        </>
    );
};

export default Popup;
