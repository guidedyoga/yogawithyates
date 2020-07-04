import React from 'react';
import PropTypes from 'prop-types';

const Experience = ({ experience }) => (
  <>
    <input type="text" value={experience} />
  </>
);

Experience.propTypes = {
  experience: PropTypes.string.isRequired,
};

export default Experience;
