"use client"

import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import SideBar from "./sidebar"
import { useEffect, useState } from "react"
import { checkSubscription } from "@/lib/subscription"

interface MobileSidebarProps {
    apiLimitCount: number,
    isPro: boolean
}

const MobileSidebar = ({apiLimitCount = 0, isPro = false}:MobileSidebarProps) => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {setIsMounted(true)},[])
    if(!isMounted) return null
    return (
        <Sheet>
            <SheetTrigger>
                <Button className='md:hidden' variant='ghost' size='icon' >
                    <Menu />
                </Button >
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <SideBar isPro={isPro} apiLimitCount={apiLimitCount} />
            </SheetContent>

        </Sheet>

    )
}

export default MobileSidebar

