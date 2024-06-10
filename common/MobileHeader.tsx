import { sidebarItemsArray } from "@/constants"
import MobileSidebarItem from "./MobileSidebarItem"

const MobileHeader = () => {
    return (
        <nav className="lg:hidden px-6 h-[75px] flex items-center bg-lime-400 border-b fixed bottom-0 w-full  z-50">
            <div className="flex gap-4 justify-end flex-1">
                {sidebarItemsArray.map(i => (
                    <MobileSidebarItem href={i.href} iconSrc={i.iconSrc} />
                ))}
            </div>
        </nav>
    )
}

export default MobileHeader