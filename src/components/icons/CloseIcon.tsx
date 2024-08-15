import BaseIcon, { BaseIconProps } from "./BaseIcon.tsx";

type Props = {
    visible?: boolean;
} & Omit<BaseIconProps, 'svg'>;

const CloseIcon = ({ visible = true, className = '', ...baseIconProps }: Props) => {
    if (!visible) {
        return null;
    }

    return (
        <BaseIcon {...baseIconProps}
            className={`CloseIcon ${className}`}
            svg={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            )} />
    )
}

export default CloseIcon