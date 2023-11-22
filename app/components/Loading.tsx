'use client';

import Image from 'next/image';

const LoadingIcon = () => {
    return (
        <Image 
            alt='Logo'
            height='200'
            width='200'
            src='/images/loading.gif'
        />
    )
}

export default LoadingIcon;