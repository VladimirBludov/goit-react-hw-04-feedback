import PropTypes from 'prop-types';
import Notification from './Notification';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  countTotal,
  positiveFeedback = 0,
}) {
  return (
    <>
      {countTotal ? (
        <ul className={s.wrapper}>
          <li className={s.item}>
            <span>
              <b>Good:</b> {good}
            </span>
          </li>
          <li className={s.item}>
            <span>
              <b>Neutral:</b> {neutral}
            </span>
          </li>
          <li className={s.item}>
            <span>
              <b>Bad:</b> {bad}
            </span>
          </li>
          <li className={s.item}>
            <span>
              <b>Total:</b> {countTotal}
            </span>
          </li>
          <li className={s.item}>
            <span>
              <b>Positive feedback:</b> {positiveFeedback}%
            </span>
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotal: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
