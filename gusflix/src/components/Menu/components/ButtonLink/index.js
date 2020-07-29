import React from 'react';

function ButtonLink(props) {
    const {className, href} = props;
    return (
        <a className={className} href={href}>
            Novo vídeo
        </a>
    );
}

export default ButtonLink;