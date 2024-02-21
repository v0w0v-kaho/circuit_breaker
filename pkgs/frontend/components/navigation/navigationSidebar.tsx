"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MyPageIcon from "@/components/Icons/MyPageIcon";
import EvaluateIcon from "@/components/Icons/EvaluateIcon";
import VerifyIcon from "@/components/Icons/VerifyIcon";
import { Logomark } from "../logomark";

export const NavigationSidebar = () => {

    const pathname = usePathname();
    const navContents = [
        {
            name: "My page",
            href: "/my-page",
            icon: <MyPageIcon />,
        },
        {
            name: "Evaluation",
            href: "/evaluate",
            icon: <EvaluateIcon />,
        },
        {
            name: "Verification",
            href: "/verify",
            icon: <VerifyIcon />,
        },
    ];

    return (
        <div className="h-full flex flex-col justify-center px-4 sticky top-0 bg-Primary10
        w-[296px] lg:w-[204.9px] md:max-w-[192px] sm:min-w-full 
        sm:h-fit sm:flex-row xs:p-1">
            <div className="absolute top-4 left-4 sm:hidden">
                <Logomark color={"white"} />
            </div>
            {navContents.map((item) => (
                <Link className={`group w-full my-5 flex rounded-lg lg:rounded 
                sm:my-1 sm:mx-5 sm:justify-center sm:w-[111px] xs:mx-0`}
                    key={item.name}
                    href={item.href}>
                    <div
                        className={`w-full rounded-md px-2 py-1 bg-white lg:rounded lg:px-1 lg:py-0
                        ${pathname === item.href
                                ? "bg-opacity-100 sm:bg-opacity-0"
                                : "bg-opacity-0 group-hover:bg-opacity-8 group-active:bg-opacity-24"
                            } `}
                    >
                        <div className="flex flex-row items-center sm:flex-col sm:space-y-1">
                            <div className={`p-2 sm:p-1.5 rounded ${pathname === item.href ? "[&_path]:fill-Primary10 sm:bg-white" : "[&_path]:fill-white"} `}>
                                {item.icon}
                            </div>
                            <span className={`text-Nav px-1 ${pathname === item.href ? "text-Primary10 font-semibold sm:text-white xs:font-medium" : "text-white font-medium"} `}>
                                {item.name}
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
