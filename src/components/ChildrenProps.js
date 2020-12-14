import React from 'react';

const ChildrenProps = ({name, children}) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      {/* Whenever you write inside of the component is automatically
       passed as a children prop */}
      {children}
    </div>
  )
}

export default ChildrenProps;
