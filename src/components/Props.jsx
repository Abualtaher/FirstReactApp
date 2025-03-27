import React from "react";
import PropTypes from "prop-types";

function Props(props) {
  return (
    <div>
      <h1>Student</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>isStudent: {props.isStudent ? "yes" : "No"} </p>
    </div>
  );
}

Props.PropType = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

export default Props;
