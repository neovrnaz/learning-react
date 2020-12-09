import React from 'react';
/*================ Render html without using JSX ================*/
const CreateAnElement = () => {
    return (
        React.createElement(
            'div',
            {id: 'hello', className: 'thisClass'},
            React.createElement('h1', null, 'hello world')
        )
    );
};


export default CreateAnElement;
