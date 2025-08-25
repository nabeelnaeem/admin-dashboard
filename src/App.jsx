import React from 'react';
import PropTypes from 'prop-types';

function BadExample({ name }) {
  return (
    <div>
      <h1>Hello</h1>
      <h1 className="text-4xl font-bold underline">Hello world!</h1>{' '}
    </div>
  );
}

BadExample.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BadExample;
