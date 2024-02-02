import React from 'react';

const Button = ({bgColor="blue",children,className=""}) => {
    let classes  = [
        className,
        'px-3',
        'lg:px-8',
        'p-2',
        'border',
        'rounded',
        'rounded-full',
        'mx-2'
    ]
    switch (bgColor) {
        case 'blue':
            classes = [...classes,'text-white bg-blue-600 hover:bg-blue-700']
            break;
        case 'white':
            classes = [...classes, 'text-blue-500 bg-white']
            break;
    }
    return (
        <button className={classes.join(' ')}>{children}</button>
    )
}

export default Button;