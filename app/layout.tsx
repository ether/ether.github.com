import './index.css'


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (<html lang="en">
    <head>
        <meta name="globalsign-domain-verification" content="9buOUAsm68lg97yJaT2W5IBeTkSrlGbOrsVwziHjIw"/>
        <title>Etherpad</title>
        <link rel="shortcut icon" href="favicon.ico"/>
        <link type="text/css" rel="stylesheet" href="/css/reset.css"/>
        <meta name="google-site-verification" content="bVuuj6GwPO2TG1ZmB67XFvKxM0YSMrQIw5rYcG5RwVw"/>
    </head>
    <body>
    <div id="root">{children}</div>
    <div id="banner"></div>
    </body>
    </html>);
}
