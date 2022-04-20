import React from 'react';

function Header({to}) {
    // return <div>Header {to}</div>;
    return React.createElement('div', null, `Header: ${to}`);
};

export default Header;