import { Component } from 'react';
import Buttons from '../Buttons';
import Section from '../Section';
import Statistics from '../Statistics';
import s from './App.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleUpdateStatistic = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((total, value) => (total = total + value));
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const countPositiveFeedback = total
      ? Math.ceil((this.state.good * 100) / total)
      : 0;
    return countPositiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const typesButton = Object.keys(this.state);

    return (
      <div className={s.wrapper}>
        <div className={s.container}>
          <Section title="Please leave feedback">
            <Buttons
              typesButton={typesButton}
              updateStatistics={this.handleUpdateStatistic}
            />
          </Section>
          <Section title="Statistics:">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotal={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        </div>
      </div>
    );
  }
}
