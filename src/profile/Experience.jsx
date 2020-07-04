import React from 'react';
import PropTypes from 'prop-types';

const Experience = ({ experience }) => {
  return (
    <>
      <input type="text" value={experience} />
    </>
  );
}

Experience.propTypes = {
  experience: PropTypes.string.isRequired
}

export default Experience;
