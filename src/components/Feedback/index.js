// Write your React code here.
import {Component} from 'react'

import FeedbackItem from '../FeedbackItem'

import './index.css'

class Feedback extends Component {
  state = {isHappyFeedBack: false}

  happyFeedBack = name => {
    if (name === 'Happy') {
      this.setState({isHappyFeedBack: true})
    }
  }

  displayEle = resources => {
    const {loveEmojiUrl, emojis} = resources
    const {isHappyFeedBack} = this.state
    if (isHappyFeedBack) {
      return (
        <>
          <img src={loveEmojiUrl} alt="love emoji" className="img" />
          <h1 className="para">Thank You</h1>
          <p className="description">
            We will use your feedback to improve our customer support
            performance
          </p>
        </>
      )
    }
    return (
      <>
        <h1 className="para">
          How satisfied are you with our customer support performance?{' '}
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachOne => (
            <FeedbackItem
              emojiDetails={eachOne}
              key={eachOne.id}
              happyFeedBack={this.happyFeedBack}
            />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {resources} = this.props

    return (
      <div className="bg-container">
        <div className="feedback-container">{this.displayEle(resources)}</div>
      </div>
    )
  }
}

export default Feedback
