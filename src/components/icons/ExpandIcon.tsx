import BaseIcon, {BaseIconProps} from "./BaseIcon.tsx";


type Props = {
    expandable?: boolean;
    expanded?: boolean;
} & Omit<BaseIconProps, 'svg'>;

const ExpandIcon = ({expanded = false, ...baseIconProps}: Props) => {
    return (
        <BaseIcon {...baseIconProps}
                  className={'ExpandIcon'}
                  svg={(
                      expanded ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                               stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                          </svg>

                      ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                               stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                          </svg>

                      )
                  )}/>
    )
}

export default ExpandIcon