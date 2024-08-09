type Props = {
    visible?: boolean;
    onClick?: () => void;
}

const DefaultIcon = ({ visible = true, onClick }: Props) => {
    if(!visible) {
        return null;
    }

    const handleOnClick = () => {
        if(typeof onClick === 'function') {
            onClick();
        }
    }

    return (
        <button className="list-item-icon DefaultIcon" onClick={handleOnClick} tabIndex={0}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth={1.5} stroke="currentColor" className='size-6'>
                <path
                    d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                    fill="#000000"/>
            </svg>
        </button>

    )
}

export default DefaultIcon