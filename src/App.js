import { Component } from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.currentTarget;
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    const arrayValues = Object.values(this.state);
    return arrayValues.reduce((item, acc) => {
      return acc + item;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percent = Math.round((this.state.good / total) * 100);
    if (isNaN(percent)) return 0;
    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const objectKeys = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={objectKeys}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </Section>
    );
  }
}

export default App;
