import BaseIcon, {BaseIconProps} from "./BaseIcon.tsx";

type Props = {
    visible?: boolean;
} & Omit<BaseIconProps, 'svg'>;

const DefaultIcon = ({visible = true, ...baseIconProps}: Props) => {
    if (!visible) {
        return null;
    }

    return (
        <BaseIcon {...baseIconProps}
                  className={'DefaultIcon'}
                  svg={(
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth={1.5}
                           stroke="currentColor" className='size-6'>
                          <path
                              d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                              fill="#000000"/>
                      </svg>
                  )}/>
    )
}

export default DefaultIcon