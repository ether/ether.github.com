import React from "react";
import {clsx} from "clsx";

export const SubHeading = (props:  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>)=>{
    return <div className={clsx("text-gray-300", "pt-2")} {...props}/>
}