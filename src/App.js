import {Component} from 'react'

import MultilingualButtons from './components/MultilingualButtons'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
  }

  setActiveLanguageId = id => {
    this.setState({
      activeLanguageId: id,
    })
  }

  render() {
    const {activeLanguageId} = this.state
    const results = languageGreetingsList.filter(
      eachItem => eachItem.id === activeLanguageId,
    )

    const {imageUrl, imageAltText} = results[0]

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head">Multilingual Greetings</h1>
          <ul className="language-list">
            {languageGreetingsList.map(greet => (
              <MultilingualButtons
                key={greet.id}
                details={greet}
                isActive={activeLanguageId === greet.id}
                setActiveLanguageId={this.setActiveLanguageId}
              />
            ))}
          </ul>
          <img src={imageUrl} alt={imageAltText} className="img" />
        </div>
      </div>
    )
  }
}

export default App
