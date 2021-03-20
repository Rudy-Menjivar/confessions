import React from "react";
import API from "../../utils/newsfeedAPI";
import "./style.css";

function ReportButton(props) {

    const handleReportClickEvent = (e) => {
        const body = {
            reported: true
        };
        API.updateConfession(props.id, body)
            .then(res => {
                props.loadConfessions();
            })
            .catch(err => console.log(err));
    };

    return (
        <button
            className={props.className}
            value={props.value}
            onClick={(e) => handleReportClickEvent(e)}
        >
            Report! 
        </button>
    );
};

export default ReportButton;
