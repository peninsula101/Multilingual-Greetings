import './index.css'

const MultilingualButtons = props => {
  const {isActive, details, setActiveLanguageId} = props
  const {buttonText, id} = details
  const className = isActive ? 'bgColorActive' : 'bgColorInactive'

  const getThatId = () => {
    setActiveLanguageId(id)
  }

  return (
    <li>
      <button type="button" className={className} onClick={getThatId}>
        {buttonText}
      </button>
    </li>
  )
}

export default MultilingualButtons
