import { Component } from 'react';
import shortid from 'shortid';

import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles.button__wrapper}>
        {options.map(key => (
          <button
            className={styles.button__feedback}
            key={shortid.generate()}
            type="button"
            onClick={onLeaveFeedback}
            name={key}
          >
            {key}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
