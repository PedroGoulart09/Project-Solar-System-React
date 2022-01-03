import React from 'react';
import PropTypes from 'prop-types';

export default function Title(props) {
  const { headline } = props;
  return (
    <div>
      <h2 className="planeta">{headline}</h2>
    </div>
  );
}
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
