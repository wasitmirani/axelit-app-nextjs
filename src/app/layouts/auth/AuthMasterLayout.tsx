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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="login-form-container">
                            <div className="mb-4">
                                <a className="logo d-inline-block" href="index.html">
                                    <img alt="#" src="../assets/images/logo/1.png" width="250"/>
                                </a>
                            </div>
                            <div className="form_container">

                                <form className="app-form rounded-control">
                                    <div className="mb-3 text-center">
                                        <h3 className="text-primary-dark">Login to your Account</h3>
                                        <p className="f-s-12 text-secondary">Get started with our app, just create an
                                            account and enjoy the experience.</p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input className="form-control" type="email"/>
                                        <div className="form-text text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input className="form-control" type="password"/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input className="form-check-input" id="formCheck1" type="checkbox"/>
                                        <label className="form-check-label" htmlFor="formCheck1">remember me</label>
                                    </div>
                                    <div>
                                        <a className="btn btn-light-primary w-100" href="index.html"
                                           role="button">Submit</a>
                                    </div>
                                    <div className="app-divider-v justify-content-center">
                                        <p>OR</p>
                                    </div>
                                    <div className="mb-3">
                                        <div className="text-center">
                                            <button className="btn btn-light-primary icon-btn b-r-5 m-1" type="button"><i
                                                    className="ti ti-brand-facebook "></i></button>
                                            <button className="btn btn-light-danger icon-btn b-r-5 m-1" type="button"><i
                                                    className="ti ti-brand-google "></i></button>
                                            <button className="btn btn-light-dark icon-btn b-r-5 m-1" type="button"><i
                                                    className="ti ti-brand-github "></i></button>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <a className="text-secondary text-decoration-underline"
                                           href="terms_condition.html">Terms of use &amp;
                                            Conditions</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
