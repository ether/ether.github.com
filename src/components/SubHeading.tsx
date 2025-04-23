'use client'
import React from "react";
import {clsx} from "clsx";
import Link from "next/link";
import {LinkProps} from "next/dist/client/link";
import {usePathname} from "next/navigation";

export const SubHeading = (props:  LinkProps & {
    children: React.ReactNode,
    className?: string,
})=>{
    const pathname = usePathname();
    console.log(pathname)

    return <Link  {...props} className={clsx("pt-2 block hover:text-primary", props.className, pathname.includes(props.href as string) && 'text-primary')}/>
}
