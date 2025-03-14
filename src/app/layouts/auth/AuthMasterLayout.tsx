// app/secondary/layout.tsx
import { ReactNode } from 'react';


export default function AuthMasterLayout({ children }: { children: ReactNode }) {

    return (
        <html lang="en">
<meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
<head>

<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta charSet="UTF-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta content="" name="description"/>
    <meta content=""  name="keywords" />
    <meta content="la-themes" name="author" />
    <link href="/assets/images/logo/favicon.png" rel="icon" type="image/x-icon" />
    <link href="/assets/images/logo/favicon.png" rel="shortcut icon" type="image/x-icon" />
    <title>{children ? `axelit - ${String(children)}` : 'axelit - Premium Admin'}</title>
   
    {/*font-awesome-css */}

    <link href="/assets/vendor/fontawesome/css/all.css" rel="stylesheet" />

    {/* Fonts  */}

    <link href="https://fonts.googleapis.com/" rel="preconnect" />
    <link  href="https://fonts.gstatic.com/" rel="preconnect" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&amp;display=swap"  rel="stylesheet" />

    {/* iconoir icon css   */}

    <link href="/assets/vendor/ionio-icon/css/iconoir.css" rel="stylesheet" />

    {/* Animation css  */}

    {/* tabler icons */}

    <link href="/assets/vendor/tabler-icons/tabler-icons.css" rel="stylesheet" type="text/css" />

    {/*flag Icon css */}

    {/* Bootstrap css */}

    <link href="/assets/vendor/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css" />


    {/* App css */}

    <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />

    {/* Responsive css */}

    <link href="/assets/css/responsive.css" rel="stylesheet" type="text/css" />
</head>

            <body className="app-wrapper d-block">

            <div className="">
        {/* <!-- Body main section starts --> */}
        <main className="w-100 p-0">
            {/* <!-- Login to your Account start --> */}
            {children}
            {/* <!-- Login to your Account end --> */}
        </main>
        {/* <!-- Body main section ends --> */}
    </div>

                 <script src="/assets/js/jquery-3.6.3.min.js"></script>
                <script src="/assets/vendor/bootstrap/bootstrap.bundle.min.js"></script>
              
            </body>
        </html>
    );
}
