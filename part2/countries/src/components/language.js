import React from "react";

const Languages = ({country}) => {
  return (
    <div>
      <ul>
      <ul>
        {Object.values(country.languages).map(language =>
        <li key={language}>{language}</li>
        )}
      </ul>
      </ul>
    </div>
  )
}
export default Languages