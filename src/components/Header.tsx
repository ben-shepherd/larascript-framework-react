import { Button } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IHeader, IHeaderButton } from "../interfaces/IHeader";
import GithubStarModal from "./modals/GithubStarModal";

const Header = ({ options }: { options: IHeader }) => {
  const {
    title,
    subTitle,
    visibleParts,
    buttons,
    addtionalClassNames
  } = options
  const {
    showTitle = true,
    showSubTitle = true,
    showBetaWarning = true,
    showArrowDown = true,
    showButtons = true,
    showAbstractLines = true
  } = visibleParts

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <GithubStarModal open={showModal} onClose={() => setShowModal(false)} />

      <header id="header_container" className={`py-5 text-3xl ${addtionalClassNames ?? ''}`}>
        {showTitle && (
          <div id="header_container__logo_text" className='py-5'>
            <h1>{title}</h1>
          </div>
        )}

        {showSubTitle && (
          <div id="header_container__logo_subtext">
            <p>{subTitle}</p>
          </div>
        )}

        {showButtons && (
          <div id="header_container__buttons" className='p-5'>
            {buttons.map((button: IHeaderButton) => {
              return (
                <div className="header_container__buttons_btn" key={button.text}>
                  <Link to={button.to} target={button.target ?? '_self'}>
                    <Button className="rounded bg-stone-200 text-gray-500 py-2 px-4 text-sm data-[hover]:bg-zinc-600 data-[hover]:text-gray-50">
                      {button.text}
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>
        )}

        {showBetaWarning && (
          <div className="header_alpha_warning text-lg">
            <h2 className="header_alpha_warning__h2">This project is in Beta.</h2>
            <ul className="header_alpha_warning__list">
              <li>Some features may be removed or changed without notice.</li>
              <li>Certain functionalities might not work as expected.</li>
              <li>We appreciate your patience as we continue to update and test.</li>
            </ul>
          </div>
        )}

        {showArrowDown && (
          <div id="header_container_arrow_down">
            <svg className="size-6 h-6 alice-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </div>
        )}

        {showAbstractLines && (
          <div className="abstract-lines">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1422 800" opacity="0.52"><g strokeWidth="1" stroke="hsl(0, 0%, 100%)" fill="none" stroke-linecap="round"><line x1="110" y1="0" x2="0" y2="110" opacity="1.00"></line><line x1="220" y1="0" x2="110" y2="110" opacity="1.00"></line><line x1="220" y1="0" x2="330" y2="110" opacity="1.00"></line><line x1="440" y1="0" x2="330" y2="110" opacity="1.00"></line><line x1="440" y1="0" x2="550" y2="110" opacity="1.00"></line><line x1="550" y1="0" x2="660" y2="110" opacity="1.00"></line><line x1="770" y1="0" x2="660" y2="110" opacity="1.00"></line><line x1="770" y1="0" x2="880" y2="110" opacity="1.00"></line><line x1="880" y1="0" x2="990" y2="110" opacity="1.00"></line><line x1="990" y1="0" x2="1100" y2="110" opacity="1.00"></line><line x1="1210" y1="0" x2="1100" y2="110" opacity="1.00"></line><line x1="1320" y1="0" x2="1210" y2="110" opacity="1.00"></line><line x1="1430" y1="0" x2="1320" y2="110" opacity="1.00"></line><line x1="0" y1="110" x2="110" y2="220" opacity="0.87"></line><line x1="110" y1="110" x2="220" y2="220" opacity="0.87"></line><line x1="330" y1="110" x2="220" y2="220" opacity="0.87"></line><line x1="330" y1="110" x2="440" y2="220" opacity="0.87"></line><line x1="550" y1="110" x2="440" y2="220" opacity="0.87"></line><line x1="550" y1="110" x2="660" y2="220" opacity="0.87"></line><line x1="770" y1="110" x2="660" y2="220" opacity="0.87"></line><line x1="770" y1="110" x2="880" y2="220" opacity="0.87"></line><line x1="990" y1="110" x2="880" y2="220" opacity="0.87"></line><line x1="990" y1="110" x2="1100" y2="220" opacity="0.87"></line><line x1="1210" y1="110" x2="1100" y2="220" opacity="0.87"></line><line x1="1320" y1="110" x2="1210" y2="220" opacity="0.87"></line><line x1="1320" y1="110" x2="1430" y2="220" opacity="0.87"></line><line x1="0" y1="220" x2="110" y2="330" opacity="0.74"></line><line x1="110" y1="220" x2="220" y2="330" opacity="0.74"></line><line x1="220" y1="220" x2="330" y2="330" opacity="0.74"></line><line x1="330" y1="220" x2="440" y2="330" opacity="0.74"></line><line x1="550" y1="220" x2="440" y2="330" opacity="0.74"></line><line x1="550" y1="220" x2="660" y2="330" opacity="0.74"></line><line x1="770" y1="220" x2="660" y2="330" opacity="0.74"></line><line x1="770" y1="220" x2="880" y2="330" opacity="0.74"></line><line x1="880" y1="220" x2="990" y2="330" opacity="0.74"></line><line x1="990" y1="220" x2="1100" y2="330" opacity="0.74"></line><line x1="1100" y1="220" x2="1210" y2="330" opacity="0.74"></line><line x1="1320" y1="220" x2="1210" y2="330" opacity="0.74"></line><line x1="1430" y1="220" x2="1320" y2="330" opacity="0.74"></line><line x1="110" y1="330" x2="0" y2="440" opacity="0.61"></line><line x1="110" y1="330" x2="220" y2="440" opacity="0.61"></line><line x1="220" y1="330" x2="330" y2="440" opacity="0.61"></line><line x1="330" y1="330" x2="440" y2="440" opacity="0.61"></line><line x1="550" y1="330" x2="440" y2="440" opacity="0.61"></line><line x1="550" y1="330" x2="660" y2="440" opacity="0.61"></line><line x1="660" y1="330" x2="770" y2="440" opacity="0.61"></line><line x1="880" y1="330" x2="770" y2="440" opacity="0.61"></line><line x1="880" y1="330" x2="990" y2="440" opacity="0.61"></line><line x1="1100" y1="330" x2="990" y2="440" opacity="0.61"></line><line x1="1100" y1="330" x2="1210" y2="440" opacity="0.61"></line><line x1="1320" y1="330" x2="1210" y2="440" opacity="0.61"></line><line x1="1320" y1="330" x2="1430" y2="440" opacity="0.61"></line><line x1="0" y1="440" x2="110" y2="550" opacity="0.48"></line><line x1="110" y1="440" x2="220" y2="550" opacity="0.48"></line><line x1="220" y1="440" x2="330" y2="550" opacity="0.48"></line><line x1="330" y1="440" x2="440" y2="550" opacity="0.48"></line><line x1="550" y1="440" x2="440" y2="550" opacity="0.48"></line><line x1="660" y1="440" x2="550" y2="550" opacity="0.48"></line><line x1="660" y1="440" x2="770" y2="550" opacity="0.48"></line><line x1="770" y1="440" x2="880" y2="550" opacity="0.48"></line><line x1="880" y1="440" x2="990" y2="550" opacity="0.48"></line><line x1="1100" y1="440" x2="990" y2="550" opacity="0.48"></line><line x1="1210" y1="440" x2="1100" y2="550" opacity="0.48"></line><line x1="1210" y1="440" x2="1320" y2="550" opacity="0.48"></line><line x1="1320" y1="440" x2="1430" y2="550" opacity="0.48"></line><line x1="0" y1="550" x2="110" y2="660" opacity="0.35"></line><line x1="110" y1="550" x2="220" y2="660" opacity="0.35"></line><line x1="220" y1="550" x2="330" y2="660" opacity="0.35"></line><line x1="330" y1="550" x2="440" y2="660" opacity="0.35"></line><line x1="550" y1="550" x2="440" y2="660" opacity="0.35"></line><line x1="550" y1="550" x2="660" y2="660" opacity="0.35"></line><line x1="770" y1="550" x2="660" y2="660" opacity="0.35"></line><line x1="880" y1="550" x2="770" y2="660" opacity="0.35"></line><line x1="880" y1="550" x2="990" y2="660" opacity="0.35"></line><line x1="990" y1="550" x2="1100" y2="660" opacity="0.35"></line><line x1="1100" y1="550" x2="1210" y2="660" opacity="0.35"></line><line x1="1320" y1="550" x2="1210" y2="660" opacity="0.35"></line><line x1="1430" y1="550" x2="1320" y2="660" opacity="0.35"></line><line x1="110" y1="660" x2="0" y2="770" opacity="0.22"></line><line x1="110" y1="660" x2="220" y2="770" opacity="0.22"></line><line x1="330" y1="660" x2="220" y2="770" opacity="0.22"></line><line x1="330" y1="660" x2="440" y2="770" opacity="0.22"></line><line x1="550" y1="660" x2="440" y2="770" opacity="0.22"></line><line x1="660" y1="660" x2="550" y2="770" opacity="0.22"></line><line x1="770" y1="660" x2="660" y2="770" opacity="0.22"></line><line x1="770" y1="660" x2="880" y2="770" opacity="0.22"></line><line x1="990" y1="660" x2="880" y2="770" opacity="0.22"></line><line x1="1100" y1="660" x2="990" y2="770" opacity="0.22"></line><line x1="1100" y1="660" x2="1210" y2="770" opacity="0.22"></line><line x1="1320" y1="660" x2="1210" y2="770" opacity="0.22"></line><line x1="1430" y1="660" x2="1320" y2="770" opacity="0.22"></line><line x1="0" y1="770" x2="110" y2="880" opacity="0.09"></line><line x1="220" y1="770" x2="110" y2="880" opacity="0.09"></line><line x1="330" y1="770" x2="220" y2="880" opacity="0.09"></line><line x1="440" y1="770" x2="330" y2="880" opacity="0.09"></line><line x1="440" y1="770" x2="550" y2="880" opacity="0.09"></line><line x1="550" y1="770" x2="660" y2="880" opacity="0.09"></line><line x1="660" y1="770" x2="770" y2="880" opacity="0.09"></line><line x1="770" y1="770" x2="880" y2="880" opacity="0.09"></line><line x1="990" y1="770" x2="880" y2="880" opacity="0.09"></line><line x1="1100" y1="770" x2="990" y2="880" opacity="0.09"></line><line x1="1210" y1="770" x2="1100" y2="880" opacity="0.09"></line><line x1="1320" y1="770" x2="1210" y2="880" opacity="0.09"></line><line x1="1430" y1="770" x2="1320" y2="880" opacity="0.09"></line></g></svg>
          </div>
        )}
      </header >
    </>
  )
}

export default Header