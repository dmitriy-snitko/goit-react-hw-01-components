import s from '../Statistics/Statistics.module.css';

import Section from '../Section/Section';
import PropTypes, { object } from 'prop-types';
import { randomColor } from '../../js/random-color';

function Statistics({ title, stats }) {
  return (
    <Section>
      {title ? <h2 className={s.title}>{title}</h2> : ''}

      <ul className={s.statList}>
        {stats.map(stat => {
          return (
            <li
              className={s.item}
              key={stat.id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(object).isRequired,
};

export default Statistics;
