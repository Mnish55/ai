"use client"

import { cn } from "@/lib/utils"
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, Settings, VideoIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { FreeCounter } from "./free-counter"

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"

    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500"

    },
    {
        label: "Image Generator",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700"

    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700"

    },
    {
        label: "Music Generation",
        icon: MusicIcon,
        href: "/music",
        color: "text-green-500"

    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        href: "/code",
        color: "text-yellow-700"

    },
    {
        label: "Setting",
        icon: Settings,
        href: "/setting",

    }
]

interface SidebarProps {
    apiLimitCount: number,
    isPro: boolean
}

const SideBar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
    const pathname = usePathname()
    return (
        <div className="space-y-4 py-4 px-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 h-full flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative h-8 w-8 mr-4">
                        <Image fill alt="logo.png" src="/logo.png" />
                    </div>
                    <h1 className="text-2xl font-bold">Zeno</h1>
                </Link>
                <div>
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
            <FreeCounter
                isPro={isPro}
                apiLimitCount={apiLimitCount} />
        </div>
    )
}

export default SideBar
