import React, { useContext, useState } from 'react';
import { languageOptions } from '../languages';
import { LanguageContext } from '../languages/Language';

//language selector button
export default function LanguageSelector() {
	const {userLanguage, userLanguageChange} = useContext(LanguageContext)
	const handleLanguageChange = e => {
    userLanguageChange(e.target.value)
  }
  
	return (
    <div>
      <div class="lang-select"
      onClick={handleLanguageChange}
      value={userLanguage}
      >
      <select flag="countries">
      {Object.entries(languageOptions).map(([id, flag]) => (
        
        <option key={id} value={id}>{flag}</option>
      

      ))} 
      </select> 

      </div>

    </div>
           
	)
}