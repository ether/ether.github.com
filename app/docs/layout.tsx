import '../index.css'
import DocSidebar from "../../src/components/DocSidebar";

export default function({
                            children,
                        }: {
    children: React.ReactNode
}) {
    return (<html lang="en">
    <head>
        <meta name="globalsign-domain-verification" content="9buOUAsm68lg97yJaT2W5IBeTkSrlGbOrsVwziHjIw"/>
        <title>Etherpad</title>
        <link rel="shortcut icon" href="favicon.ico"/>
        <meta name="google-site-verification" content="bVuuj6GwPO2TG1ZmB67XFvKxM0YSMrQIw5rYcG5RwVw"/>
    </head>
    <body>
    <div className="flex-row!">
        <DocSidebar/>
        <div id="root">{children}</div>
    </div>
    </body>
    </html>)
}