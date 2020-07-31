import React from 'react';
import {Link} from 'react-router-dom';

function ButtonLink(props) {
    const {className, href} = props;
    return (
        <Link className={className} to={href}>
            Novo vídeo
        </Link>
    );
}

export default ButtonLink;