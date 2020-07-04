import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ firstName, lastName }) => (
  <>
    <input type="text" value={firstName} />
    <input type="text" value={lastName} />
  </>
);

Name.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Name;
