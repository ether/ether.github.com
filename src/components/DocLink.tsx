export const DocLink = ({href, children}:{children: React.ReactNode, href: string})=>{
    return <a className="text-primary underline" href={href} >{children}</a>
}
