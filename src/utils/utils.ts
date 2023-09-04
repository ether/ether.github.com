import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const downloadFile = (url: string)=>{
    const link = document.createElement("a");
    // If you don't know the name or want to use
    // the webserver default set name = ''
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
}
