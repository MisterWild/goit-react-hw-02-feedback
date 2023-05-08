import PropTypes from 'prop-types';
import b from  './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={b}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
