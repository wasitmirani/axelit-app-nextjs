import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
        <div className="row">

<div className="col-lg-6 col-xxl-4">
    <div className="row">
        <div className="col-sm-6">
            <div className="card project-total-card">
                <div className="card-body">
                    <div className="d-flex position-relative">
                        <h5 className="text-dark txt-ellipsis-1">Total Hours</h5>
                        <div className="clock-box">
                            <div className="clock">
                                <div className="hour" id="hour"></div>
                                <div className="min" id="min"></div>
                                <div className="sec" id="sec"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex">
                            <h2 className="text-info-dark hour-display">00H</h2>
                        </div>
                        <div className="progress-labels mg-t-40">
                            <span className="text-info">Productive</span>
                            <span className="text-info">Middle</span>
                            <span className="text-info">Idle</span>
                        </div>
                        <div className="custom-progress-container info-progress">
                            <div className="progress-bar productive"></div>
                            <div className="progress-bar middle"></div>
                            <div className="progress-bar idle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-sm-6">
            <div className="card bg-info-300 project-details-card">
                <div className="card-body">
                    <div className="d-flex gap-2">
                        <span className="badge bg-white-300 text-info-dark p-1  b-r-10">📱 Mobile app</span>
                        <span className="badge dashed-1-info text-info-dark ms-2 p-1  b-r-10">Marketing</span>
                    </div>
                    <div className="my-4">
                        <h5 className="f-w-600 text-info-dark txt-ellipsis-1">Project Alpha</h5>
                        <p className="text-info f-s-13 txt-ellipsis-1 mb-0">Revolutionizing ideas,
                            empowering innovation, and driving success.</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-3">
                        <ul className="avatar-group">
                            <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-light-primary b-2-primary">
                                <img alt="avtar" className="img-fluid"
                                     src="/assets/images/avtar/4.png" />
                            </li>
                            <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-light-success b-2-success"
                                data-bs-title="Lennon Briggs" data-bs-toggle="tooltip">
                                <img alt="avtar" className="img-fluid"
                                     src="/assets/images/avtar/5.png" />
                            </li>
                            <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-light-info b-2-info"
                                data-bs-title="Maya Horton" data-bs-toggle="tooltip">
                                <img alt="avtar" className="img-fluid"
                                     src="/assets/images/avtar/6.png" />
                            </li>
                        </ul>
                        <span className="badge bg-white-300 text-info-dark ms-2 ">🔥 1H left</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-sm-6">
            <div className="card bg-success-300 project-details-card">
                <div className="card-body">
                    <div className="d-flex gap-2">
                        <span className="badge bg-white-300 text-success-dark p-1 b-r-10">⚡ API </span>
                        <span className="badge bg-transparent dashed-1-dark-light text-success-dark ms-2 p-1 b-r-10">Web Development</span>
                    </div>
                    <div className="my-4">
                        <h5 className="f-w-600 text-success-dark txt-ellipsis-1">Project Beta</h5>
                        <p className="text-success f-s-13 txt-ellipsis-1 mb-0"> Innovating solutions
                            for seamless task management efficiency.</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-3">
                        <ul className="avatar-group">
                            <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-light-primary b-2-primary">
                                <img alt="avtar" className="img-fluid"
                                     src="/assets/images/avtar/4.png" />
                            </li>
                            <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-light-danger b-2-danger"
                                data-bs-title="Maya Horton" data-bs-toggle="tooltip">
                                <img alt="avtar" className="img-fluid"
                                     src="/assets/images/avtar/6.png" />
                            </li>
                        </ul>
                        <span className="badge bg-white-300 text-success-dark ms-2 ">✨ 2D left</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-sm-6">
            <div className="card core-teams-card">
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="text-dark f-w-600 txt-ellipsis-1">💼 Core Teams</h5>
                    </div>
                    <div>
                        <h2 className="text-warning-dark my-4 d-inline-flex align-items-baseline">1k
                            <span className="f-s-12 text-dark">Team Members</span></h2>
                        <ul className="avatar-group justify-content-start ">
                            <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-primary b-2-light"
                                data-bs-title="Sabrina Torres" data-bs-toggle="tooltip">
                                <img alt="avtar" className="img-fluid"
                                     src="/assets/images/avtar/4.png" />
                            </li>
                            <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-success b-2-light"
                                data-bs-title="Eva Bailey" data-bs-toggle="tooltip">
                                <img alt="avtar" className="img-fluid"
                                     src="/assets/images/avtar/5.png" />
                            </li>
                            <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-danger b-2-light"
                                data-bs-title="Michael Hughes" data-bs-toggle="tooltip">
                                <img alt="avtar" className="img-fluid"
                                     src="/assets/images/avtar/6.png" />
                            </li>
                            <li className="text-bg-secondary h-35 w-35 d-flex-center b-r-50"
                                data-bs-title="10 More" data-bs-toggle="tooltip">
                                10+
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>








 </div>
    </div>
    );
};

export default Home;