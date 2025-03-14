// app/secondary/layout.tsx
import { ReactNode, useEffect } from 'react';
import LayoutSwitcher from "./partials/Switcher";
import HeaderMenu from "./partials/Header";
import SideBarMenu from "./partials/SideBarMenu";
// import { useAuth } from 'app/contexts/AuthContext';
import { useRouter } from 'next/router';

export default function MasterLayout({ children }: { children: ReactNode }) {
    const router = useRouter();
    // const { user } = useAuth();
    // console.log("user",user);

    // useEffect(() => {
    //   if (!user) {
    //     router.push("/auth/login");
    //   }
    // }, [user, router]);
  
    // if (!user) return null; // Prevent flicker during redirect
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

    <link href="/assets/vendor/animation/animate.min.css" rel="stylesheet" />

    {/* tabler icons */}

    <link href="/assets/vendor/tabler-icons/tabler-icons.css" rel="stylesheet" type="text/css" />

    {/*flag Icon css */}

    <link href="/assets/vendor/flag-icons-master/flag-icon.css" rel="stylesheet" type="text/css" />

    {/* Bootstrap css */}

    <link href="/assets/vendor/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css" />

    {/* apexcharts css */}

    <link href="/assets/vendor/apexcharts/apexcharts.css" rel="stylesheet" type="text/css" />

    {/* simplebar css */}

    <link href="/assets/vendor/simplebar/simplebar.css" rel="stylesheet" type="text/css"  />

    {/* slick css  */}

    <link href="/assets/vendor/slick/slick.css" rel="stylesheet" />
    <link href="/assets/vendor/slick/slick-theme.css" rel="stylesheet" />

    {/* filepond css  */}

    <link href="/assets/vendor/filepond/filepond.css" rel="stylesheet" />
    <link href="/assets/vendor/filepond/image-preview.min.css" rel="stylesheet" />

    {/* App css */}

    <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />

    {/* Responsive css */}

    <link href="/assets/css/responsive.css" rel="stylesheet" type="text/css" />
</head>

            <body className="">

             <div className="app-wrapper">
            <div className="loader-wrapper">
                <div className="app-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

                {/* {/* Switcher */}

                <LayoutSwitcher />
                <SideBarMenu />
             

                {/* {/* Loader */}
                <div className="app-content ">
                <div className="">
                    <HeaderMenu />

                  
                    {/* <!-- Start::app-content --> */}
                    <main>
                      <div className="container-fluid mt-3">
                    
                       
                            {children}
                      
                    </div>
                </main>
                </div>
                </div>
                    {/* Body main section ends  */}

                 {/* tap on top  */}

        <div className="go-top">
        <span className="progress-value">
            <i className="ti ti-chevron-up"></i>
        </span>
        </div>


    {/* Footer Section starts */}

    <footer>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9 col-12">
                    <ul className="footer-text">
                        <li>
                            <p className="mb-0">Copyright © 2025 axelit. All rights reserved 💖</p>
                        </li>
                        <li><a href="#"> V1.0.0 </a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="footer-text text-end">
                        <li><a href="mailto:teqlathemes@gmail.com."> Need Help <i className="ti ti-help"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    {/* Footer Section ends */}

                {/* <!-- End::app-content --> */}
                </div>


                <div id="customizer"></div>

                 <script src="/assets/js/jquery-3.6.3.min.js"></script>
                <script src="/assets/vendor/bootstrap/bootstrap.bundle.min.js"></script>
                <script src="/assets/vendor/simplebar/simplebar.js"></script>
                <script src="/assets/vendor/apexcharts/apexcharts.min.js"></script>
                <script src="/assets/vendor/apexcharts/column/dayjs.min.js"></script>
                <script src="/assets/vendor/apexcharts/column/quarterOfYear.min.js"></script>
                <script src="/assets/vendor/apexcharts/timelinechart/moment.min.js"></script>
                <script src="/assets/js/customizer.js"></script>
                <script src="/assets/vendor/phosphor/phosphor.js"></script>
                <script src="/assets/vendor/slick/slick.min.js"></script>
                <script src="/assets/vendor/filepond/file-encode.min.js"></script>
                <script src="/assets/vendor/filepond/validate-size.min.js"></script>
                <script src="/assets/vendor/filepond/validate-type.js"></script>
                <script src="/assets/vendor/filepond/exif-orientation.min.js"></script>
                <script src="/assets/vendor/filepond/image-preview.min.js"></script>
                <script src="/assets/vendor/filepond/filepond.min.js"></script>
                <script src="/assets/js/project_dashboard.js"></script>
                <script src="/assets/js/script.js"></script>
            </body>
        </html>
    );
}
