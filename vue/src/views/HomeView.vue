<template>
    <!-- Wrapper Start -->
    <div class="iq-top-navbar">
        <nav class="nav navbar navbar-expand-lg navbar-light iq-navbar p-lg-0">
            <div class="container-fluid navbar-inner">
                <div
                    class="d-flex align-items-center flex-lg-row-reverse gap-3 pb-2 pb-lg-0"
                >
                    <a
                        class="sidebar-toggle"
                        data-toggle="sidebar"
                        data-active="true"
                        href="javascript:void(0);"
                    >
                        <div
                            class="icon material-symbols-outlined iq-burger-menu"
                        >
                            menu
                        </div>
                    </a>
                    <a
                        href="index.html"
                        class="d-flex align-items-center gap-2 iq-header-logo"
                    >
                        <svg
                            width="50"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1.67733 9.50001L7.88976 20.2602C9.81426 23.5936 14.6255 23.5936 16.55 20.2602L22.7624 9.5C24.6869 6.16666 22.2813 2 18.4323 2H6.00746C2.15845 2 -0.247164 6.16668 1.67733 9.50001ZM14.818 19.2602C13.6633 21.2602 10.7765 21.2602 9.62181 19.2602L9.46165 18.9828L9.46597 18.7275C9.48329 17.7026 9.76288 16.6993 10.2781 15.8131L12.0767 12.7195L14.1092 16.2155C14.4957 16.8803 14.7508 17.6132 14.8607 18.3743L14.9544 19.0239L14.818 19.2602ZM16.4299 16.4683L19.3673 11.3806C18.7773 11.5172 18.172 11.5868 17.5629 11.5868H13.7316L15.8382 15.2102C16.0721 15.6125 16.2699 16.0335 16.4299 16.4683ZM20.9542 8.63193L21.0304 8.5C22.1851 6.5 20.7417 4 18.4323 4H17.8353L17.1846 4.56727C16.6902 4.99824 16.2698 5.50736 15.9402 6.07437L13.8981 9.58676H17.5629C18.4271 9.58676 19.281 9.40011 20.0663 9.03957L20.9542 8.63193ZM14.9554 4C14.6791 4.33499 14.4301 4.69248 14.2111 5.06912L12.0767 8.74038L10.0324 5.22419C9.77912 4.78855 9.48582 4.37881 9.15689 4H14.9554ZM6.15405 4H6.00746C3.69806 4 2.25468 6.50001 3.40938 8.50001L3.4915 8.64223L4.37838 9.04644C5.15962 9.40251 6.00817 9.58676 6.86672 9.58676H10.2553L8.30338 6.22943C7.9234 5.57587 7.42333 5.00001 6.8295 4.53215L6.15405 4ZM5.07407 11.3833L7.88909 16.2591C8.05955 15.7565 8.28025 15.2702 8.54905 14.8079L10.4218 11.5868H6.86672C6.26169 11.5868 5.66037 11.5181 5.07407 11.3833Z"
                                fill="currentColor"
                            />
                        </svg>
                        <h3
                            class="logo-title d-none d-sm-block"
                            data-setting="app_name"
                        >
                            SocialV
                        </h3>
                    </a>
                </div>

                <div class="iq-search-bar device-search position-relative">
                    <form
                        action="#"
                        class="searchbox"
                        data-bs-toggle="modal"
                        data-bs-target="#searchmodal"
                    >
                        <a
                            class="search-link d-none d-lg-block"
                            href="javascript:void(0);"
                        >
                            <span class="material-symbols-outlined"
                                >search</span
                            >
                        </a>
                        <input
                            type="text"
                            class="text search-input form-control bg-soft-primary d-none d-lg-block"
                            placeholder="Search here..."
                        />
                        <a
                            class="d-lg-none d-flex d-none d-lg-block"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#searchmodal"
                        >
                            <span class="material-symbols-outlined"
                                >search</span
                            >
                        </a>
                    </form>
                    <div
                        class="modal fade search-modal"
                        id="searchmodal"
                        aria-labelledby="searchmodalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog modal-fullscreen-lg-down">
                            <div class="modal-content">
                                <div class="modal-header py-2">
                                    <div
                                        class="d-flex align-items-center justify-content-between d-lg-none w-100"
                                    >
                                        <form
                                            action="#"
                                            class="searchbox w-50"
                                            data-bs-toggle="modal"
                                            data-bs-target="#searchmodal"
                                        >
                                            <a
                                                class="search-link"
                                                href="javascript:void(0);"
                                            >
                                                <span
                                                    class="material-symbols-outlined"
                                                    >search</span
                                                >
                                            </a>
                                            <input
                                                type="text"
                                                class="text search-input form-control bg-soft-primary"
                                                placeholder="Search here..."
                                            />
                                        </form>
                                        <a
                                            href="javascript:void(0);"
                                            class="material-symbols-outlined text-dark"
                                            data-bs-dismiss="modal"
                                            >close</a
                                        >
                                    </div>
                                    <div
                                        class="d-none d-lg-flex align-items-center justify-content-between w-100"
                                    >
                                        <h4
                                            class="modal-title"
                                            id="exampleModalFullscreenLabel"
                                        >
                                            Recent
                                        </h4>
                                        <a
                                            class="text-dark"
                                            href="javascript:void(0);"
                                            >Clear All</a
                                        >
                                    </div>
                                </div>
                                <div class="modal-body p-0">
                                    <div
                                        class="d-flex d-lg-none align-items-center justify-content-between w-100 p-3 pb-0"
                                    >
                                        <h5
                                            class="modal-title h4"
                                            id="exampleModalFullscreenLabel"
                                        >
                                            Recent
                                        </h5>
                                        <a
                                            href="javascript:void(0);"
                                            class="text-dark"
                                            >Clear All</a
                                        >
                                    </div>
                                    <div
                                        class="d-flex align-items-center border-bottom search-hover py-2 px-3"
                                    >
                                        <div class="flex-shrink-0">
                                            <img
                                                src="../assets/images/page-img/19.jpg"
                                                class="align-self-center img-fluid avatar-50 rounded-pill"
                                                alt="#"
                                            />
                                        </div>
                                        <div
                                            class="d-flex flex-column ms-3 w-100"
                                        >
                                            <a
                                                href="javascript:void(0);"
                                                class="h5"
                                                >Paige Turner</a
                                            >
                                            <span>Paige001</span>
                                        </div>
                                        <div
                                            class="d-flex align-items-center ms-auto"
                                        >
                                            <a
                                                href="javascript:void(0);"
                                                class="me-3 d-flex align-items-center"
                                                ><small>Follow</small>
                                            </a>
                                            <a
                                                href="javascript:void(0);"
                                                class="material-symbols-outlined text-dark"
                                                >close</a
                                            >
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center border-bottom search-hover py-2 px-3"
                                    >
                                        <div class="flex-shrink-0">
                                            <img
                                                src="../assets/images/page-img/18.jpg"
                                                class="align-self-center img-fluid avatar-50 rounded-pill"
                                                alt="#"
                                            />
                                        </div>
                                        <div
                                            class="d-flex flex-column ms-3 w-100"
                                        >
                                            <a
                                                href="javascript:void(0);"
                                                class="h5"
                                                >Monty Carlo</a
                                            >
                                            <span>Carlo.m</span>
                                        </div>
                                        <div
                                            class="d-flex align-items-center ms-auto"
                                        >
                                            <a
                                                href="javascript:void(0);"
                                                class="me-3 d-flex align-items-center"
                                                ><small>Unfollow</small>
                                            </a>
                                            <a
                                                href="javascript:void(0);"
                                                class="material-symbols-outlined text-dark"
                                                >close</a
                                            >
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center search-hover py-2 px-3 border-bottom"
                                    >
                                        <div class="flex-shrink-0">
                                            <img
                                                src="../assets/images/page-img/20.jpg"
                                                class="align-self-center img-fluid avatar-50 rounded-pill"
                                                alt="#"
                                            />
                                        </div>
                                        <div
                                            class="d-flex flex-column ms-3 w-100"
                                        >
                                            <a
                                                href="javascript:void(0);"
                                                class="h5"
                                                >Paul Molive</a
                                            >
                                            <span>Paul.45</span>
                                        </div>
                                        <div
                                            class="d-flex align-items-center ms-auto"
                                        >
                                            <a
                                                href="javascript:void(0);"
                                                class="me-3 d-flex align-items-center"
                                                ><small>Request</small>
                                            </a>
                                            <a
                                                href="javascript:void(0);"
                                                class="material-symbols-outlined text-dark"
                                                >close</a
                                            >
                                        </div>
                                    </div>
                                    <div class="">
                                        <h4 class="px-3 py-2">Suggestions</h4>
                                        <div class="suggestion-card px-3">
                                            <div class="text-center story">
                                                <div class="story-profile">
                                                    <img
                                                        src="../assets/images/page-img/20.jpg"
                                                        class="avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                        >Ammy Paul</a
                                                    >
                                                </div>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="d-lg-none align-items-center d-flex"
                                                    ><small>Follow</small>
                                                </a>
                                            </div>
                                            <div class="text-center story">
                                                <div class="story-profile">
                                                    <img
                                                        src="../assets/images/page-img/21.jpg"
                                                        class="avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                        >Roger Carlo</a
                                                    >
                                                </div>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="d-lg-none align-items-center d-flex"
                                                    ><small>Unfollow</small>
                                                </a>
                                            </div>
                                            <div class="text-center story">
                                                <div class="story-profile">
                                                    <img
                                                        src="../assets/images/page-img/22.jpg"
                                                        class="avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                        >Justin Molive</a
                                                    >
                                                </div>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="d-lg-none align-items-center d-flex"
                                                    ><small>Follow</small>
                                                </a>
                                            </div>
                                            <div class="text-center story">
                                                <div class="story-profile">
                                                    <img
                                                        src="../assets/images/page-img/23.jpg"
                                                        class="avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                        >Roy Fisher</a
                                                    >
                                                </div>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="d-lg-none align-items-center d-flex"
                                                    ><small>Request</small>
                                                </a>
                                            </div>
                                            <div class="text-center story">
                                                <div class="story-profile">
                                                    <img
                                                        src="../assets/images/page-img/24.jpg"
                                                        class="avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                        >Johan Carlo</a
                                                    >
                                                </div>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="d-lg-none align-items-center d-flex"
                                                    ><small>Follow</small>
                                                </a>
                                            </div>
                                            <div class="text-center story">
                                                <div class="story-profile">
                                                    <img
                                                        src="../assets/images/page-img/09.jpg"
                                                        class="avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                        >Medra Miles</a
                                                    >
                                                </div>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="d-lg-none align-items-center d-flex"
                                                    ><small>Unfollow</small>
                                                </a>
                                            </div>
                                            <div class="text-center story">
                                                <div class="story-profile">
                                                    <img
                                                        src="../assets/images/page-img/03.jpg"
                                                        class="avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                        >Aohan Paul</a
                                                    >
                                                </div>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="d-lg-none align-items-center d-flex"
                                                    ><small>Request</small>
                                                </a>
                                            </div>
                                            <div class="text-center story">
                                                <div class="story-profile">
                                                    <img
                                                        src="../assets/images/page-img/02.jpg"
                                                        class="avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                        >Rokni Joy</a
                                                    >
                                                </div>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="d-lg-none align-items-center d-flex"
                                                    ><small>Follow</small>
                                                </a>
                                            </div>
                                            <div class="text-center story">
                                                <div class="story-profile">
                                                    <img
                                                        src="../assets/images/page-img/01.jpg"
                                                        class="avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                        >Sepid Ryan</a
                                                    >
                                                </div>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="d-lg-none align-items-center d-flex"
                                                    ><small>Unfollow</small>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav navbar-list">
                    <li class="nav-item">
                        <a href="index.html" class="d-flex align-items-center">
                            <i class="material-symbols-outlined">home</i>
                        </a>
                    </li>
                    <li class="nav-item d-lg-none">
                        <div
                            class="iq-search-bar device-search position-relative"
                        >
                            <form
                                action="#"
                                class="searchbox"
                                data-bs-toggle="modal"
                                data-bs-target="#searchmodal"
                            >
                                <a
                                    class="search-link d-none d-lg-block"
                                    href="javascript:void(0);"
                                >
                                    <span class="material-symbols-outlined"
                                        >search</span
                                    >
                                </a>
                                <input
                                    type="text"
                                    class="text search-input form-control bg-soft-primary d-none d-lg-block"
                                    placeholder="Search here..."
                                />
                                <a
                                    class="d-lg-none d-flex"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#searchmodal"
                                >
                                    <span class="material-symbols-outlined"
                                        >search</span
                                    >
                                </a>
                            </form>
                            <div
                                class="modal fade search-modal"
                                id="searchmodal"
                                aria-labelledby="searchmodalLabel"
                                aria-hidden="true"
                            >
                                <div
                                    class="modal-dialog modal-fullscreen-lg-down"
                                >
                                    <div class="modal-content">
                                        <div class="modal-header py-2">
                                            <div
                                                class="d-flex align-items-center justify-content-between d-lg-none w-100"
                                            >
                                                <form
                                                    action="#"
                                                    class="searchbox w-50"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#searchmodal"
                                                >
                                                    <a
                                                        class="search-link"
                                                        href="javascript:void(0);"
                                                    >
                                                        <span
                                                            class="material-symbols-outlined"
                                                            >search</span
                                                        >
                                                    </a>
                                                    <input
                                                        type="text"
                                                        class="text search-input form-control bg-soft-primary"
                                                        placeholder="Search here..."
                                                    />
                                                </form>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="material-symbols-outlined text-dark"
                                                    data-bs-dismiss="modal"
                                                    >close</a
                                                >
                                            </div>
                                            <div
                                                class="d-none d-lg-flex align-items-center justify-content-between w-100"
                                            >
                                                <h4
                                                    class="modal-title"
                                                    id="exampleModalFullscreenLabel"
                                                >
                                                    Recent
                                                </h4>
                                                <a
                                                    class="text-dark"
                                                    href="javascript:void(0);"
                                                    >Clear All</a
                                                >
                                            </div>
                                        </div>
                                        <div class="modal-body p-0">
                                            <div
                                                class="d-flex d-lg-none align-items-center justify-content-between w-100 p-3 pb-0"
                                            >
                                                <h5
                                                    class="modal-title h4"
                                                    id="exampleModalFullscreenLabel"
                                                >
                                                    Recent
                                                </h5>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="text-dark"
                                                    >Clear All</a
                                                >
                                            </div>
                                            <div
                                                class="d-flex align-items-center border-bottom search-hover py-2 px-3"
                                            >
                                                <div class="flex-shrink-0">
                                                    <img
                                                        src="../assets/images/page-img/19.jpg"
                                                        class="align-self-center img-fluid avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                </div>
                                                <div
                                                    class="d-flex flex-column ms-3 w-100"
                                                >
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h5"
                                                        >Paige Turner</a
                                                    >
                                                    <span>Paige001</span>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center ms-auto"
                                                >
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="me-3 d-flex align-items-center"
                                                        ><small>Follow</small>
                                                    </a>
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="material-symbols-outlined text-dark"
                                                        >close</a
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                class="d-flex align-items-center border-bottom search-hover py-2 px-3"
                                            >
                                                <div class="flex-shrink-0">
                                                    <img
                                                        src="../assets/images/page-img/18.jpg"
                                                        class="align-self-center img-fluid avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                </div>
                                                <div
                                                    class="d-flex flex-column ms-3 w-100"
                                                >
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h5"
                                                        >Monty Carlo</a
                                                    >
                                                    <span>Carlo.m</span>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center ms-auto"
                                                >
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="me-3 d-flex align-items-center"
                                                        ><small>Unfollow</small>
                                                    </a>
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="material-symbols-outlined text-dark"
                                                        >close</a
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                class="d-flex align-items-center search-hover py-2 px-3 border-bottom"
                                            >
                                                <div class="flex-shrink-0">
                                                    <img
                                                        src="../assets/images/page-img/20.jpg"
                                                        class="align-self-center img-fluid avatar-50 rounded-pill"
                                                        alt="#"
                                                    />
                                                </div>
                                                <div
                                                    class="d-flex flex-column ms-3 w-100"
                                                >
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="h5"
                                                        >Paul Molive</a
                                                    >
                                                    <span>Paul.45</span>
                                                </div>
                                                <div
                                                    class="d-flex align-items-center ms-auto"
                                                >
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="me-3 d-flex align-items-center"
                                                        ><small>Request</small>
                                                    </a>
                                                    <a
                                                        href="javascript:void(0);"
                                                        class="material-symbols-outlined text-dark"
                                                        >close</a
                                                    >
                                                </div>
                                            </div>
                                            <div class="">
                                                <h4 class="px-3 py-2">
                                                    Suggestions
                                                </h4>
                                                <div
                                                    class="suggestion-card px-3"
                                                >
                                                    <div
                                                        class="text-center story"
                                                    >
                                                        <div
                                                            class="story-profile"
                                                        >
                                                            <img
                                                                src="../assets/images/page-img/20.jpg"
                                                                class="avatar-50 rounded-pill"
                                                                alt="#"
                                                            />
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                                >Ammy Paul</a
                                                            >
                                                        </div>
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="d-lg-none align-items-center d-flex"
                                                            ><small
                                                                >Follow</small
                                                            >
                                                        </a>
                                                    </div>
                                                    <div
                                                        class="text-center story"
                                                    >
                                                        <div
                                                            class="story-profile"
                                                        >
                                                            <img
                                                                src="../assets/images/page-img/21.jpg"
                                                                class="avatar-50 rounded-pill"
                                                                alt="#"
                                                            />
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                                >Roger Carlo</a
                                                            >
                                                        </div>
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="d-lg-none align-items-center d-flex"
                                                            ><small
                                                                >Unfollow</small
                                                            >
                                                        </a>
                                                    </div>
                                                    <div
                                                        class="text-center story"
                                                    >
                                                        <div
                                                            class="story-profile"
                                                        >
                                                            <img
                                                                src="../assets/images/page-img/22.jpg"
                                                                class="avatar-50 rounded-pill"
                                                                alt="#"
                                                            />
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                                >Justin
                                                                Molive</a
                                                            >
                                                        </div>
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="d-lg-none align-items-center d-flex"
                                                            ><small
                                                                >Follow</small
                                                            >
                                                        </a>
                                                    </div>
                                                    <div
                                                        class="text-center story"
                                                    >
                                                        <div
                                                            class="story-profile"
                                                        >
                                                            <img
                                                                src="../assets/images/page-img/23.jpg"
                                                                class="avatar-50 rounded-pill"
                                                                alt="#"
                                                            />
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                                >Roy Fisher</a
                                                            >
                                                        </div>
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="d-lg-none align-items-center d-flex"
                                                            ><small
                                                                >Request</small
                                                            >
                                                        </a>
                                                    </div>
                                                    <div
                                                        class="text-center story"
                                                    >
                                                        <div
                                                            class="story-profile"
                                                        >
                                                            <img
                                                                src="../assets/images/page-img/24.jpg"
                                                                class="avatar-50 rounded-pill"
                                                                alt="#"
                                                            />
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                                >Johan Carlo</a
                                                            >
                                                        </div>
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="d-lg-none align-items-center d-flex"
                                                            ><small
                                                                >Follow</small
                                                            >
                                                        </a>
                                                    </div>
                                                    <div
                                                        class="text-center story"
                                                    >
                                                        <div
                                                            class="story-profile"
                                                        >
                                                            <img
                                                                src="../assets/images/page-img/09.jpg"
                                                                class="avatar-50 rounded-pill"
                                                                alt="#"
                                                            />
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                                >Medra Miles</a
                                                            >
                                                        </div>
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="d-lg-none align-items-center d-flex"
                                                            ><small
                                                                >Unfollow</small
                                                            >
                                                        </a>
                                                    </div>
                                                    <div
                                                        class="text-center story"
                                                    >
                                                        <div
                                                            class="story-profile"
                                                        >
                                                            <img
                                                                src="../assets/images/page-img/03.jpg"
                                                                class="avatar-50 rounded-pill"
                                                                alt="#"
                                                            />
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                                >Aohan Paul</a
                                                            >
                                                        </div>
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="d-lg-none align-items-center d-flex"
                                                            ><small
                                                                >Request</small
                                                            >
                                                        </a>
                                                    </div>
                                                    <div
                                                        class="text-center story"
                                                    >
                                                        <div
                                                            class="story-profile"
                                                        >
                                                            <img
                                                                src="../assets/images/page-img/02.jpg"
                                                                class="avatar-50 rounded-pill"
                                                                alt="#"
                                                            />
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                                >Rokni Joy</a
                                                            >
                                                        </div>
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="d-lg-none align-items-center d-flex"
                                                            ><small
                                                                >Follow</small
                                                            >
                                                        </a>
                                                    </div>
                                                    <div
                                                        class="text-center story"
                                                    >
                                                        <div
                                                            class="story-profile"
                                                        >
                                                            <img
                                                                src="../assets/images/page-img/01.jpg"
                                                                class="avatar-50 rounded-pill"
                                                                alt="#"
                                                            />
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="h6 mt-0 mt-lg-2 ms-3 ms-lg-0 text-ellipsis short-2 small"
                                                                >Sepid Ryan</a
                                                            >
                                                        </div>
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="d-lg-none align-items-center d-flex"
                                                            ><small
                                                                >Unfollow</small
                                                            >
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            href="javascript:void(0);"
                            class="dropdown-toggle d-flex align-items-center"
                            id="group-drop"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span class="material-symbols-outlined">group</span>
                        </a>
                        <div
                            class="sub-drop sub-drop-large dropdown-menu"
                            aria-labelledby="group-drop"
                        >
                            <div class="card shadow-none m-0">
                                <div
                                    class="card-header d-flex justify-content-between bg-primary"
                                >
                                    <div class="header-title">
                                        <h5 class="mb-0 text-white">
                                            Friend Request
                                        </h5>
                                    </div>
                                    <small class="badge bg-light text-dark"
                                        >4</small
                                    >
                                </div>
                                <div class="card-body p-0">
                                    <div class="iq-friend-request">
                                        <div
                                            class="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between"
                                        >
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/01.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <div class="ms-3">
                                                    <h6 class="mb-0">
                                                        Jaques Amole
                                                    </h6>
                                                    <p class="mb-0">
                                                        40 friends
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <a
                                                    href="javascript:void(0);"
                                                    class="me-3 btn btn-primary rounded"
                                                    >Confirm</a
                                                >
                                                <a
                                                    href="javascript:void(0);"
                                                    class="me-3 btn btn-secondary rounded"
                                                    >Delete Request</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="iq-friend-request">
                                        <div
                                            class="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between"
                                        >
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/02.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <div class="ms-3">
                                                    <h6 class="mb-0">
                                                        Lucy Tania
                                                    </h6>
                                                    <p class="mb-0">
                                                        12 friends
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <a
                                                    href="javascript:void(0);"
                                                    class="me-3 btn btn-primary rounded"
                                                    >Confirm</a
                                                >
                                                <a
                                                    href="javascript:void(0);"
                                                    class="me-3 btn btn-secondary rounded"
                                                    >Delete Request</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="iq-friend-request">
                                        <div
                                            class="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between"
                                        >
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/03.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <div class="ms-3">
                                                    <h6 class="mb-0">
                                                        Manny Petty
                                                    </h6>
                                                    <p class="mb-0">
                                                        3 friends
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <a
                                                    href="javascript:void(0);"
                                                    class="me-3 btn btn-primary rounded"
                                                    >Confirm</a
                                                >
                                                <a
                                                    href="javascript:void(0);"
                                                    class="me-3 btn btn-secondary rounded"
                                                    >Delete Request</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="iq-friend-request">
                                        <div
                                            class="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between"
                                        >
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/04.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <div class="ms-3">
                                                    <h6 class="mb-0">
                                                        Marsha Mello
                                                    </h6>
                                                    <p class="mb-0">
                                                        15 friends
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <a
                                                    href="javascript:void(0);"
                                                    class="me-3 btn btn-primary rounded"
                                                    >Confirm</a
                                                >
                                                <a
                                                    href="javascript:void(0);"
                                                    class="me-3 btn btn-secondary rounded"
                                                    >Delete Request</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <a
                                            href="javascript:void(0);"
                                            class="btn text-primary"
                                            >View More Request</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            href="javascript:void(0);"
                            class="search-toggle dropdown-toggle d-flex align-items-center"
                            id="notification-drop"
                            data-bs-toggle="dropdown"
                        >
                            <i class="material-symbols-outlined"
                                >notifications</i
                            >
                        </a>
                        <div
                            class="sub-drop dropdown-menu"
                            aria-labelledby="notification-drop"
                        >
                            <div class="card shadow-none m-0">
                                <div
                                    class="card-header d-flex justify-content-between bg-primary"
                                >
                                    <div class="header-title bg-primary">
                                        <h5 class="mb-0 text-white">
                                            All Notifications
                                        </h5>
                                    </div>
                                    <small class="badge bg-light text-dark"
                                        >4</small
                                    >
                                </div>
                                <div class="card-body p-0">
                                    <a
                                        href="javascript:void(0);"
                                        class="iq-sub-card"
                                    >
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/01.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="ms-3 w-100">
                                                <h6 class="mb-0">
                                                    Emma Watson Bni
                                                </h6>
                                                <div
                                                    class="d-flex justify-content-between align-items-center"
                                                >
                                                    <p class="mb-0">95 MB</p>
                                                    <small
                                                        class="float-right font-size-12"
                                                        >Just Now</small
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="javascript:void(0);"
                                        class="iq-sub-card"
                                    >
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/02.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div class="ms-3 w-100">
                                                <h6 class="mb-0">
                                                    New customer is join
                                                </h6>
                                                <div
                                                    class="d-flex justify-content-between align-items-center"
                                                >
                                                    <p class="mb-0">Cyst Bni</p>
                                                    <small
                                                        class="float-right font-size-12"
                                                        >5 days ago</small
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="javascript:void(0);"
                                        class="iq-sub-card"
                                    >
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/03.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div class="ms-3 w-100">
                                                <h6 class="mb-0">
                                                    Two customer is left
                                                </h6>
                                                <div
                                                    class="d-flex justify-content-between align-items-center"
                                                >
                                                    <p class="mb-0">Cyst Bni</p>
                                                    <small
                                                        class="float-right font-size-12"
                                                        >2 days ago</small
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="javascript:void(0);"
                                        class="iq-sub-card"
                                    >
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/04.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div class="w-100 ms-3">
                                                <h6 class="mb-0">
                                                    New Mail from Fenny
                                                </h6>
                                                <div
                                                    class="d-flex justify-content-between align-items-center"
                                                >
                                                    <p class="mb-0">Cyst Bni</p>
                                                    <small
                                                        class="float-right font-size-12"
                                                        >3 days ago</small
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            href="javascript:void(0);"
                            class="dropdown-toggle d-flex align-items-center"
                            id="mail-drop"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i class="material-symbols-outlined">mail</i>
                            <span class="mobile-text d-none ms-3">Message</span>
                        </a>
                        <div
                            class="sub-drop dropdown-menu"
                            aria-labelledby="mail-drop"
                        >
                            <div class="card shadow-none m-0">
                                <div
                                    class="card-header d-flex justify-content-between bg-primary"
                                >
                                    <div class="header-title bg-primary">
                                        <h5 class="mb-0 text-white">
                                            All Message
                                        </h5>
                                    </div>
                                    <small class="badge bg-light text-dark"
                                        >4</small
                                    >
                                </div>
                                <div class="card-body p-0">
                                    <a
                                        href="javascript:void(0);"
                                        class="iq-sub-card"
                                    >
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/01.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div class="w-100 ms-3">
                                                <h6 class="mb-0">
                                                    Bni Emma Watson
                                                </h6>
                                                <small
                                                    class="float-left font-size-12"
                                                    >13 Jun</small
                                                >
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="javascript:void(0);"
                                        class="iq-sub-card"
                                    >
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/02.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0">
                                                    Lorem Ipsum Watson
                                                </h6>
                                                <small
                                                    class="float-left font-size-12"
                                                    >20 Apr</small
                                                >
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="javascript:void(0);"
                                        class="iq-sub-card"
                                    >
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/03.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0">
                                                    Why do we use it?
                                                </h6>
                                                <small
                                                    class="float-left font-size-12"
                                                    >30 Jun</small
                                                >
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="javascript:void(0);"
                                        class="iq-sub-card"
                                    >
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/04.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0">
                                                    Variations Passages
                                                </h6>
                                                <small
                                                    class="float-left font-size-12"
                                                    >12 Sep</small
                                                >
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="javascript:void(0);"
                                        class="iq-sub-card"
                                    >
                                        <div class="d-flex align-items-center">
                                            <div class="">
                                                <img
                                                    class="avatar-40 rounded"
                                                    src="../assets/images/user/05.jpg"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0">
                                                    Lorem Ipsum generators
                                                </h6>
                                                <small
                                                    class="float-left font-size-12"
                                                    >5 Dec</small
                                                >
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item d-none d-lg-none">
                        <a
                            href="https://templates.iqonic.design/socialv/bs5/html/dist/app/chat.html"
                            class="dropdown-toggle d-flex align-items-center"
                            id="mail-drop-1"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i class="material-symbols-outlined">mail</i>
                            <span class="mobile-text ms-3">Message</span>
                        </a>
                    </li>
                    <li class="nav-item dropdown user-dropdown">
                        <a
                            href="javascript:void(0);"
                            class="d-flex align-items-center dropdown-toggle"
                            id="drop-down-arrow"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <img
                                src="../assets/images/user/1.jpg"
                                class="img-fluid rounded-circle me-3"
                                alt="user"
                                loading="lazy"
                            />
                            <div class="caption d-none d-lg-block">
                                <h6 class="mb-0 line-height">
                                    {{ currentUser.name }}
                                </h6>
                            </div>
                        </a>
                        <div
                            class="sub-drop dropdown-menu caption-menu"
                            aria-labelledby="drop-down-arrow"
                        >
                            <div class="card shadow-none m-0">
                                <div class="card-header">
                                    <div class="header-title">
                                        <h5 class="mb-0">Hello Bni Cyst</h5>
                                    </div>
                                </div>
                                <div class="card-body p-0">
                                    <div
                                        class="d-flex align-items-center iq-sub-card border-0"
                                    >
                                        <span class="material-symbols-outlined">
                                            line_style
                                        </span>
                                        <div class="ms-3">
                                            <a
                                                href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile.html"
                                                class="mb-0 h6"
                                            >
                                                My Profile
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center iq-sub-card border-0"
                                    >
                                        <span class="material-symbols-outlined">
                                            edit_note
                                        </span>
                                        <div class="ms-3">
                                            <a
                                                href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile-edit.html"
                                                class="mb-0 h6"
                                            >
                                                Edit Profile
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center iq-sub-card border-0"
                                    >
                                        <span class="material-symbols-outlined">
                                            manage_accounts
                                        </span>
                                        <div class="ms-3">
                                            <a
                                                href="https://templates.iqonic.design/socialv/bs5/html/dist/app/account-setting.html"
                                                class="mb-0 h6"
                                            >
                                                Account settings
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center iq-sub-card border-0"
                                    >
                                        <span class="material-symbols-outlined">
                                            lock
                                        </span>
                                        <div class="ms-3">
                                            <a
                                                href="https://templates.iqonic.design/socialv/bs5/html/dist/app/privacy-setting.html"
                                                class="mb-0 h6"
                                            >
                                                Privacy Settings
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center iq-sub-card"
                                    >
                                        <span class="material-symbols-outlined">
                                            login
                                        </span>
                                        <div class="ms-3">
                                            <a
                                                href="sign-in.html"
                                                class="mb-0 h6"
                                            >
                                                Sign out
                                            </a>
                                        </div>
                                    </div>
                                    <div class="iq-sub-card">
                                        <h5>Chat Settings</h5>
                                    </div>
                                    <div
                                        class="d-flex align-items-center iq-sub-card border-0"
                                    >
                                        <i
                                            class="material-symbols-outlined text-success md-14"
                                        >
                                            circle
                                        </i>
                                        <div class="ms-3">Online</div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center iq-sub-card border-0"
                                    >
                                        <i
                                            class="material-symbols-outlined text-warning md-14"
                                        >
                                            circle
                                        </i>
                                        <div class="ms-3">Away</div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center iq-sub-card border-0"
                                    >
                                        <i
                                            class="material-symbols-outlined text-danger md-14"
                                        >
                                            circle
                                        </i>
                                        <div class="ms-3">Disconnected</div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center iq-sub-card border-0"
                                    >
                                        <i
                                            class="material-symbols-outlined text-gray md-14"
                                        >
                                            circle
                                        </i>
                                        <div class="ms-3">Invisible</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <aside
        class="sidebar sidebar-default sidebar-base navs-rounded-all"
        id="first-tour"
        data-toggle="main-sidebar"
        data-sidebar="responsive"
    >
        <div class="sidebar-body pt-0 data-scrollbar">
            <div class="sidebar-list">
                <!-- Sidebar Menu Start -->
                <ul class="navbar-nav iq-main-menu" id="sidebar-menu">
                    <li class="nav-item static-item">
                        <a
                            class="nav-link static-item disabled"
                            href="#"
                            tabindex="-1"
                        >
                            <span class="default-icon">Social</span>
                            <span
                                class="mini-icon"
                                data-bs-toggle="tooltip"
                                title="Social"
                                data-bs-placement="right"
                                >-</span
                            >
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link active"
                            aria-current="page"
                            href="index.html"
                        >
                            <i class="icon material-symbols-outlined">
                                newspaper
                            </i>
                            <span class="item-name">Newsfeed</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            data-bs-toggle="collapse"
                            href="#profile"
                            role="button"
                            aria-expanded="false"
                            aria-controls="profile"
                        >
                            <i class="icon material-symbols-outlined">
                                person
                            </i>
                            <span class="item-name">Profiles</span>
                            <i class="right-icon material-symbols-outlined"
                                >chevron_right</i
                            >
                        </a>
                        <ul
                            class="sub-nav collapse"
                            id="profile"
                            data-bs-parent="#sidebar-menu"
                        >
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile.html"
                                >
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> P </i>
                                    <span class="item-name"> Profile </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="profile1.html">
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> P </i>
                                    <span class="item-name">Profile 1 </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="profile2.html">
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> P </i>
                                    <span class="item-name">Profile 2 </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="profile3.html">
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> P </i>
                                    <span class="item-name">Profile 3 </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile-images.html"
                                >
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> PI </i>
                                    <span class="item-name">Profile Image</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile-videos.html"
                                >
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> PV </i>
                                    <span class="item-name">Profile Video</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile-event.html"
                                >
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> PE </i>
                                    <span class="item-name"
                                        >Profile Events</span
                                    >
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile-badges.html"
                                >
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> PB </i>
                                    <span class="item-name"
                                        >Profile Badges</span
                                    >
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile-forum.html"
                                >
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> PF </i>
                                    <span class="item-name">Profile Forum</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            data-bs-toggle="collapse"
                            href="#friend-list"
                            role="button"
                            aria-expanded="false"
                            aria-controls="sidebar-special"
                        >
                            <i class="icon material-symbols-outlined">
                                people
                            </i>
                            <span class="item-name">Friend</span>
                            <i class="right-icon material-symbols-outlined"
                                >chevron_right</i
                            >
                        </a>
                        <ul
                            class="sub-nav collapse"
                            id="friend-list"
                            data-bs-parent="#sidebar-menu"
                        >
                            <li class="nav-item">
                                <a class="nav-link" href="friend-list.html">
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> FL </i>
                                    <span class="item-name"> Friend List</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="friend-profile.html">
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> FP </i>
                                    <span class="item-name"
                                        >Friend Profile</span
                                    >
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    aria-current="page"
                                    href="friend-request.html"
                                >
                                    <i
                                        class="icon material-symbols-outlined filled"
                                    >
                                        fiber_manual_record
                                    </i>
                                    <i class="sidenav-mini-icon"> FR </i>
                                    <span class="item-name"
                                        >Friend Request</span
                                    >
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            aria-current="page"
                            href="https://templates.iqonic.design/socialv/bs5/html/dist/app/group.html"
                        >
                            <i class="icon material-symbols-outlined">
                                groups
                            </i>
                            <span class="item-name">Group</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            aria-current="page"
                            href="notification.html"
                        >
                            <i class="icon material-symbols-outlined">
                                notifications
                            </i>
                            <span class="item-name">Notification</span>
                        </a>
                    </li>
                </ul>
                <!-- Sidebar Menu End -->
            </div>
        </div>
        <div class="sidebar-footer"></div>
    </aside>

    <!-- Wrapper End-->

    <footer class="iq-footer bg-white fixed-bottom">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                            <a href="privacy-policy.html">Privacy Policy</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="terms-of-service.html">Terms of Use</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 d-flex justify-content-end">
                    Copyright <span id="copyright"> </span>
                    <a href="#"> SocialV</a>
                    All Rights Reserved.
                </div>
            </div>
        </div>
    </footer>
    <!-- Live Customizer start -->
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";

const currentUser = computed(() => store.state.user);

onMounted(() => {
    store.dispatch("getUser");
});

</script>
