import { Component } from 'react';
import shortid from 'shortid';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(key => (
          <button
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
