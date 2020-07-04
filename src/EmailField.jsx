import React from 'react';
import PropTypes from 'prop-types';

import {
  Name,
  Experience,
  Chakra,
} from './profile';

const EmailField = ({
  hidden, firstName, lastName, experience, chakra,
}) => {
  if (hidden) return null;
  return (
    <>
      <form>
        <Name firstName={firstName} lastName={lastName} />
        <Experience experience={experience} />
        <Chakra chakra={chakra} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

EmailField.propTypes = {
  hidden: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  experience: PropTypes.string,
  chakra: PropTypes.string,
};

EmailField.defaultProps = {
  hidden: true,
  firstName: 'First',
  lastName: 'Last',
  experience: 'Level 5',
  chakra: 'Water',
};

export default EmailField;
