import React from "react";

export type BaseIconProps = {
    svg: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const BaseIcon = ({svg, className = '', onClick = () => null }: BaseIconProps) => {

    const handleClick = () => {
        if(typeof onClick === 'function') {
            onClick();
        }
    }

    return (
        <button className={`BaseIcon ${className}`} onClick={handleClick} tabIndex={0}>
            {svg}
        </button>

    )
}

export default BaseIcon