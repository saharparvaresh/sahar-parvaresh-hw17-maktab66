import React from "react";
import PropTypes from 'prop-types';

const SelectLists = ({ list }) => {
    return (
        <>
            <div key={list.id} style={{ fontSize: "18px", margin: "5px 0" }}>
                <span> {list.title} </span>
            </div>
        </>
    );
}

export default SelectLists;


SelectLists.propTypes = {
    list : PropTypes.object
}

