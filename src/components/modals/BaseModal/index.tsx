import CloseIcon from '../../icons/CloseIcon';
import './styles.scss';

export type ModelButton = {
    text: string;
    onClick: () => void;
    className?: string;
}

export type ModelProps = {
    open: boolean;
    title: string;
    content: React.ReactNode;
    buttons: ModelButton[];
    onClose: () => void;
    className?: string;
}

const Modal = ({ open, title, content, buttons, onClose, className = '' }: ModelProps) => {
    if (!open) {
        return null;
    }

    return (
        <div className={`Modal__backdrop ${className}`}>
            <div className='Modal__container w-11/12  md:w-3/5 lg:w-2/5'>
                <div className="Modal__inner">
                    <div className="Modal__title">
                        <div className='Modal__title__close'>
                            <CloseIcon className='Modal__title__close_icon' onClick={onClose} />
                        </div>
                        <p className="Modal__title__text p-5">{title}</p>
                    </div>
                    <div className='Modal__content p-10'>
                        {content}
                    </div>
                    <div className='Modal__buttons'>
                        {buttons.map((button: ModelButton, index: number) => {
                            return (
                                <button className={`Modal__buttons__button Modal__buttons__button_${index + 1} ${button.className}`} key={button.text} onClick={button.onClick}>{button.text}</button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal