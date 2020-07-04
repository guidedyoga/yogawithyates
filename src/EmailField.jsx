import React from 'react';
import PropTypes from 'prop-types';

import {
  Name,
  Experience,
  Chakra,
} from './profile';

function EmailField() {
  return (
    <form>
      <Name />
      <Experience />
      <Chakra />
      <button type="submit">Submit</button>
    </form>
  );
}

EmailField.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  experience: PropTypes.string,
  chakra: PropTypes.string,
}

export default EmailField;
