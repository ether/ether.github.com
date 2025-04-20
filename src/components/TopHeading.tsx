import React from "react";
import {clsx} from "clsx";

export const TopHeading = (props:  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>)=>{
    return <div className={clsx("text-white")} {...props}/>
}