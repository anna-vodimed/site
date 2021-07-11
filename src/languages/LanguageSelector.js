import React, { useContext, useState } from 'react';
import { languageOptions } from '../languages';
import { LanguageContext } from '../languages/Language';

export default function LanguageSelector() {
	const {userLanguage, userLanguageChange} = useContext(LanguageContext)
	const handleLanguageChange = e => {
    userLanguageChange(e.target.value)
  }
  
	return (
    <div>
      <div class="bac"
      onClick={handleLanguageChange}
      value={userLanguage}
      >
      <select name="countries">
      {Object.entries(languageOptions).map(([id, name]) => (
        
        <option key={id} value={id}>{name}</option>
      

      ))} 
      </select> 

      </div>

    </div>
           
	)
}