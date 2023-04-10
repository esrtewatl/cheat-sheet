import React, { useState } from 'react';
import './App.css';
import { questions } from './questions';
import logo from './logo-color.png';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = questions.filter(question => {
      const lowerCasedValue = value.toLowerCase();
      return question.category.toLowerCase().includes(lowerCasedValue) || 
             question.question.toLowerCase().includes(lowerCasedValue) || 
             question.answer.toLowerCase().includes(lowerCasedValue);
    });

    setFilteredQuestions(filtered);
  };

  const highlightKeyword = (text, keyword) => {
    const regex = new RegExp(keyword, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => {
      return (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <mark>{keyword}</mark>}
        </span>
      );
    });
  };

  return (
    <div className='body'>
      <div className='logo-div'><img src ={logo} className='logo' alt='Logo for Code Brew ATL' /> </div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} className='search' />
      {filteredQuestions.map(question => (
        <div className='questions' key={question.id}>
          <div className='category'>{question.category}</div>
          <div className='question'>{highlightKeyword(question.question, searchTerm)}</div>
          <div className='answer'>{highlightKeyword(question.answer, searchTerm)}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
