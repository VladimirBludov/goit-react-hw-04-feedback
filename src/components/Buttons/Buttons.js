import PropTypes from 'prop-types';
import s from './Buttons.module.css';

export default function Buttons({ typesButton, updateStatistics }) {
  return (
    <ul className={s.list}>
      {typesButton.map(type => (
        <li key={type} className={s.item}>
          <button
            className={`${s.button} ${s[type]}`}
            onClick={() => updateStatistics(type)}
          >
            {type}
          </button>
        </li>
      ))}
    </ul>
  );
}

Buttons.propTypes = {
  typesButton: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
  updateStatistics: PropTypes.func.isRequired,
};
