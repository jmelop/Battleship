import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Map
            </Link>
            <Link href="/vessels" className="item">
                Vessels
            </Link>
        </div>
    );
}

export default Header;