import { Component } from 'react';
import Notification from '../Notification';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return total() === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{good} </li>
          <li>Neutral:{neutral} </li>
          <li>Bad:{bad} </li>
          <li>Total:{total()} </li>
          <li>Positive feedback:{positivePercentage()}% </li>
        </ul>
      </>
    );
  }
}

export default Statistics;
