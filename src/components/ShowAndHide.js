import React, { useState } from 'react';

const ShowAndHide = () => {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);
  return (
      <div>
        <input type="submit" value="Toggle" onClick={onClick} />
        { show ? <Results /> : null }
      </div>
  )
}

const Results = () => (
    <div id="results" className="search-results">
      Hello World
    </div>
)

export default ShowAndHide;
