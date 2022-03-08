import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { QuestionsContextProvider } from './store/questions-context'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionsContextProvider>
        <App />
      </QuestionsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
