import { Button } from "@headlessui/react"
import { Link } from "react-router-dom"
import { IHeaderButton } from "../../interfaces/IHeader"

type Props = {
    button: IHeaderButton
    onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const HeaderButton = ({ button }: { button: IHeaderButton }) => {
    return (
        <Button className="rounded bg-stone-200 text-gray-500 py-2 px-4 text-sm data-[hover]:bg-zinc-600 data-[hover]:text-gray-50">
            {button.text}
        </Button>
    )
}

const HeaderLink = ({ button, onClick }: Props) => {

    return (
        <div className="header_container__buttons_btn">
            {button.asAnchorElement && (
                <a href={button.to} target={button.target ?? '_self'}>
                    <HeaderButton button={button} />
                </a>
            )}

            {!button.asAnchorElement && (
                <Link to={button.to} target={button.target ?? '_self'} onClick={(e) => onClick(e)}>
                    <HeaderButton button={button} />
                </Link>
            )}
        </div>
    )
}

export default HeaderLink