import { useEffect } from "react";

type Props = {
    sectionRef: React.RefObject<HTMLElement>
}

const useSidebarFixed = ({ sectionRef }: Props) => {
    useEffect(() => {
        const handleScroll = () => {
            if(!sectionRef.current) {
                return;
            }
            const currentPosY = window.scrollY
            const additionalPadding = window.innerHeight * 0.1
            const targetPosY = sectionRef.current.offsetTop + additionalPadding
            const className = 'sidebar-fixed';

            if(currentPosY >= targetPosY) {
                if(!sectionRef.current.classList.contains(className)) {
                    sectionRef.current.classList.add(className)
                }
                return;
            }

            if(sectionRef.current.classList.contains(className)) {
                sectionRef.current.classList.remove(className)
            }
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
}

export default useSidebarFixed