import React from 'react';

const DefaultExport = () => <h1>Hello from a default export</h1>
const AnotherDefaultExport = () => <p>Hello from another default export</p>

export default DefaultExport;

// export default AnotherDefaultExport;
// If you uncomment you will get an error because only one default export is allowed
