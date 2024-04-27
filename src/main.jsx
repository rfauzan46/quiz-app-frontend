import React from 'react'
import ReactDOM from 'react-dom/client'
import AddQuestion from '../components/question/AddQuestion.jsx'
import GetAllQuiz from '../components/quiz/GetAllQuiz.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GetAllQuiz />
  </React.StrictMode>,
)
