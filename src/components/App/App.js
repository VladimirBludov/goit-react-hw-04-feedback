import { useState } from 'react';
import Buttons from '../Buttons';
import Section from '../Section';
import Statistics from '../Statistics';
import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleUpdateStatistic = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.ceil((good * 100) / total) : 0;
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Section title="Please leave feedback">
          <Buttons
            typesButton={['good', 'neutral', 'bad']}
            updateStatistics={handleUpdateStatistic}
          />
        </Section>
        <Section title="Statistics:">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotal={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    </div>
  );
}
