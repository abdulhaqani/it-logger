import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#eidt-log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <span className="grey-text">
          <span className="black-text">{log.tech}</span>
        </span>
      </div>
    </li>
  );
};

LogItem.propTypes = {};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
