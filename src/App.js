import { useState } from 'react';
import logo from './placeholder.png';
import './App.css';
import Button from './components/Button';
import Start from './components/Start';


function App() {

  const [buttonClicked, setButtonClicked] = useState(null)

  const notifyStatus = (text) => {
    console.log('Button was clicked')
    console.log('Which one: ', text)

    setButtonClicked(text)
  }

  const renderPage = () => {
    console.log('Loading')
    if(buttonClicked === 'Start') {
      return <Start />
    }
else {
  return (
    <div className= "App">
    <h1>RecGames</h1>
    <img src= {logo} className="App-logo" alt="logo" />
    <p>Your own personalized list so you won't waste time conversing.</p>
    <Button text={'Start'} onButtonClick={notifyStatus} />
    </div>
  )
    }
  }
  return <div className='App'>{renderPage()}</div>
}

export default App;
