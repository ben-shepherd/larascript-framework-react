import React from "react";

export type BaseIconProps = {
    svg: React.ReactNode;
    className?: string;
    noPointerEvents?: boolean;
    onClick?: () => void;
}

const BaseIcon = ({svg, className = '', noPointerEvents = false, onClick = () => null }: BaseIconProps) => {

    const handleClick = () => {
        if(typeof onClick === 'function') {
            onClick();
        }
    }

    return (
        <button className={`BaseIcon ${className} ${noPointerEvents ? 'NoPointerEvents' : ''}`} onClick={handleClick} tabIndex={0}>
            {svg}
        </button>

    )
}

export default BaseIcon