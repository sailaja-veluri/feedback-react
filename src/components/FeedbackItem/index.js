import './index.css'

const FeedbackItem = props => {
  const {emojiDetails, happyFeedBack} = props
  const {name, imageUrl} = emojiDetails
  const onFeedBack = () => {
    happyFeedBack(name)
  }
  return (
    <li className="emoji-card">
      <img src={imageUrl} alt={name} className="img" onClick={onFeedBack} />
      <p className="description">{name}</p>
    </li>
  )
}

export default FeedbackItem
