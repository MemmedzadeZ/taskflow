import React, { useState } from "react";

import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import SidebarComponent from "../SideBar/SidebarComponent";
import CountNotification from "../Components/NotificationCount";
import CountMessage from "../Components/MessageCount";
import TwoMessage from "../Components/MessageList";
import TwoNotification from "../Components/NotificationList";
import CalendarCount from "../Components/CalendarNotificationCount";
import TwoCalendarNotification from "../Components/CalendarList";

const ProjectDetail = () => {

  return (
    <>
      <div>
        <div className="sidebar-expand">
          <div className="DIV">
            <SidebarComponent />

            {/* Main Header */}
            <div className="main-header">
              <div className="d-flex">
                <div className="mobile-toggle" id="mobile-toggle">
                  <i className="bx bx-menu"></i>
                </div>
                <div className="main-title">Project Details</div>
              </div>

              <div className="d-flex align-items-center">
                {/* App Search */}
                <div className="d-flex align-items-center">
                  {/* App Search */}

                  <SidebarSearchComponent></SidebarSearchComponent>

                  <CurrentPerson />
                </div>
              </div>
            </div>

            <>
              <div className="main">
                <div className="main-content dashboard">
                  <div className="row">
                    <div className="col-12">
                      <div className="box card-box">
                        <div className="icon-box bg-color-1">
                          <div className="icon bg-icon-1">
                            <i className="bx bxs-bell bx-tada"></i>
                          </div>
                          <CountNotification />
                          <TwoNotification />
                        </div>

                        <div className="icon-box bg-color-2">
                          <div className="icon bg-icon-2">
                            <i className="bx bxs-message-rounded"></i>
                          </div>
                          <CountMessage />
                          <TwoMessage />
                        </div>

                        <div className="icon-box bg-color-3">
                          <a className="create d-flex" href="calendar.html">
                            <div className="icon bg-icon-3">
                              <i className="bx bx-calendar"></i>
                            </div>
                          </a>
                          <CalendarCount />
                          <TwoCalendarNotification />
                        </div>

                        <div className="icon-box bg-color-4">
                          <a
                            className="create d-flex"
                            href="/project"
                            data-toggle="modal"
                            data-target="#add_project"
                          >
                            <div className="icon bg-white">
                              <i className="bx bx-plus"></i>
                            </div>
                            <div className="content d-flex align-items-center">
                              <h5 className="color-white">
                                Create New Project
                              </h5>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="box project">
                        <div className="box-header">
                          <h4 className="box-title">
                            Here will be full project name
                          </h4>
                          <div className="box-right d-flex">
                            <a className="btn" href="project-details.html">
                              Project Details
                            </a>
                            <div className="icon-ratting">
                              <i className="bx bxs-star" />
                            </div>
                            <div className="dropdown ml-14">
                              <a
                                href="javascript:void(0);"
                                className="btn-link"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded fs-22" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_project"
                                >
                                  <i className="bx bx-trash" /> Delete
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="bx bx-edit mr-5" />
                                  Edit
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider" />
                        <div className="box-body d-flex justify-content-between pb-0">
                          <div className="team-name">
                            <a href="#" className="team">
                              <div className="icon">
                                <i className="fas fa-tags" />
                              </div>
                              <h5>Team Name</h5>
                            </a>
                          </div>
                          <div className="action">
                            <a href="#" className="comment">
                              32 Comments
                            </a>
                            <a href="#" className="edit">
                              Edit
                            </a>
                            <a href="#" className="invite">
                              <i className="fas fa-user-plus mr-5" />
                              Invite People
                            </a>
                            <a href="#" className="add">
                              New
                              <i className="fas fa-caret-down pl-12" />
                            </a>
                          </div>
                          <ul className="user-list s2">
                            <li>
                              <img
                                src="./images/avatar/team-1.png"
                                alt="user"
                              />
                            </li>
                            <li>
                              <img
                                src="./images/avatar/team-2.png"
                                alt="user"
                              />
                            </li>
                            <li>
                              <img
                                src="./images/avatar/team-3.png"
                                alt="user"
                              />
                            </li>
                            <li>
                              <img
                                src="./images/avatar/team-4.png"
                                alt="user"
                              />
                            </li>
                            <li>
                              <img
                                src="./images/avatar/team-5.png"
                                alt="user"
                              />
                            </li>
                            <li className="total">
                              <span>+4</span>
                            </li>
                          </ul>
                        </div>
                        <div className="divider" />
                        <div className="box-body content">
                          <h4 className="title">Project Description</h4>
                          <p className="fs-18 font-w400 font-main mt-27 mb-29">
                            Etiam convallis elementum sapien, a aliquam turpis
                            aliquam vitae. Praesent sollicitudin felis vel mi
                            facilisis posuere. Nulla ultrices facilisis justo,
                            non varius nisl semper vel. Interdum et malesuada
                            fames ac ante ipsum primis in faucibus. Phasellus at
                            ante mattis, condimentum velit et, dignissim nunc.
                            Integer quis tincidunt purus. Duis dignissim mauris
                            vel elit commodo.
                          </p>
                          <ul>
                            <li>
                              <p className="fs-18 font-w600 color-primary mb-23">
                                <span className="pr-19">1.</span>Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                              </p>
                            </li>
                            <li>
                              <p className="fs-18 font-w600 color-primary mb-23">
                                <span className="pr-15">2.</span>Fusce vitae
                                ligula iaculis, sollicitudin sem at, venenatis
                                turpis.
                              </p>
                            </li>
                            <li>
                              <p className="fs-18 font-w600 color-primary mb-23">
                                <span className="pr-25">.</span>Maecenas
                                pharetra mi sit amet dolor rhoncus, quis
                                placerat elit cursus.
                              </p>
                            </li>
                            <li>
                              <p className="fs-18 font-w600 color-primary mb-23">
                                <span className="pr-15">3.</span>Nullam eleifend
                                nisi nec diam varius, vitae malesuada ex
                                eleifend.
                              </p>
                            </li>
                            <li>
                              <p className="fs-18 font-w600 color-primary mb-23">
                                <span className="pr-25">.</span>Integer
                                convallis nisi quis vestibulum semper.
                              </p>
                            </li>
                          </ul>
                          <h6 className="mt-30">
                            Proin rutrum ipsum quis sem faucibus, in elementum
                            mi dignissim.
                          </h6>
                          <p className="mt-32 fs-18">
                            Cras eu elit congue, placerat dui ut, tincidunt
                            nisl. Nulla leo elit, pharetra bibendum justo quis,
                            cursus consectetur erat. Sed nec posuere turpis.
                            Maecenas nec bibendum purus. Nulla fringilla, lorem
                            iaculis iaculis fermentum, ligula nibh mollis ipsum,
                            et scelerisque risus ante eu sem. Phasellus ac
                            sagittis nisi. Suspendisse potenti. Nunc volutpat
                            dui ipsum. Suspendisse potenti.
                          </p>
                          <ul className="list-img">
                            <li>
                              <div className="img-dv">
                                <img
                                  src="./images/product/project-01.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="img-dv">
                                <img
                                  src="./images/product/project-02.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="img-dv">
                                <img
                                  src="./images/product/project-03.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="img-dv">
                                <img
                                  src="./images/product/project-04.jpg"
                                  alt=""
                                />
                                <div className="overlay-1" />
                                <a href="#" className="more">
                                  <h5 className="text-white">+ More 5 files</h5>
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="form-chat">
                            <form action="#" method="get" acceptCharset="utf-8">
                              <div className="message-form-chat">
                                {/* /.pin */}
                                <span className="message-text">
                                  <textarea
                                    name="message"
                                    placeholder="Type comment here"
                                    required="required"
                                    defaultValue={""}
                                  />
                                </span>
                                {/* /.message-text */}
                                <span className="camera">
                                  <a href="#" title="">
                                    <i className="fas fa-smile" />
                                  </a>
                                </span>
                                {/* /.camera */}
                                <span className="icon-message">
                                  <a href="#" title="">
                                    <i className="fas fa-paperclip" />
                                  </a>
                                </span>
                                {/* /.icon-right */}
                                {/* <div class="icon-mobile">
                                      <ul>
                                          <li>
                                              <a href="#" title=""><i class="fas fa-smile"></i></a>
                                          </li>
                                          <li>
                                              <a href="#" title=""><i class="fas fa-paperclip"></i></a>
                                          </li>
                                      </ul>
                                  </div> */}
                                {/* /.icon-right */}
                                <span className="btn-send">
                                  <button
                                    className="waves-effect"
                                    type="submit"
                                  >
                                    Send <i className="fas fa-paper-plane" />
                                  </button>
                                </span>
                                {/* /.btn-send */}
                              </div>
                              {/* /.message-form-chat */}
                              <div className="clearfix" />
                            </form>
                            {/* /form */}
                          </div>
                          <div className="project-description mt-10">
                            <h4>Project Description</h4>
                            <div className="comment-box">
                              <div className="comment d-flex">
                                <div className="left d-flex">
                                  <div className="comment-pic">
                                    <img
                                      src="./images/avatar/cmt-01.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="comment-body">
                                    <div className="name">
                                      <h5 className="font-w600 fs-18">
                                        Elizabeth Holland
                                      </h5>
                                      <p className="text mb-0 fs-18">
                                        Duis pretium gravida enim, vel maximus
                                        ligula fermentum a. Sed rhoncus eget ex
                                        id egestas. Nam nec nisl placerat,
                                        tempus erat a, condimentum metus.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="right">
                                  <div className="group-action mt-10">
                                    <a href="#" className="like active">
                                      <i className="fas fa-thumbs-up" />
                                      34 Like
                                    </a>
                                    <a href="#" className="reply">
                                      <i className="fas fa-reply-all" />
                                      Reply
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="divider" />
                              <div className="comment d-flex">
                                <div className="left d-flex">
                                  <div className="comment-pic">
                                    <img
                                      src="./images/avatar/cmt-02.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="comment-body">
                                    <div className="name">
                                      <h5 className="font-w600 fs-18">
                                        Mike Palmer
                                      </h5>
                                      <p className="text mb-0 fs-18">
                                        Donec dapibus mauris id odio ornare
                                        tempus. Duis sit amet accumsan justo,
                                        quis tempor ligula. Quisque quis
                                        pharetra felis. Ut quis consequat orci,
                                        at consequat felis. Suspendisse auctor
                                        laoreet placerat. Nam et risus non lacus
                                        dignissim lacinia sit amet nec eros.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="right">
                                  <div className="group-action mt-10">
                                    <a href="#" className="like">
                                      <i className="fas fa-thumbs-up" />
                                      34 Like
                                    </a>
                                    <a href="#" className="reply">
                                      <i className="fas fa-reply-all" />
                                      Reply
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="divider" />
                              <div className="comment rep d-flex">
                                <div className="left d-flex">
                                  <div className="comment-pic">
                                    <img
                                      src="./images/avatar/cmt-03.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="comment-body">
                                    <div className="name">
                                      <h5 className="font-w600 fs-18">
                                        Beatrice Collins
                                      </h5>
                                      <p className="text mb-0 fs-18">
                                        Donec dapibus mauris id odio ornare
                                        tempus. Duis sit amet accumsan justo,
                                        quis tempor ligula. Quisque quis
                                        pharetra felis. Ut quis consequat orci.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="right">
                                  <div className="group-action mt-10"></div>
                                </div>
                              </div>
                              <div className="divider" />
                              <div className="comment rep d-flex">
                                <div className="left d-flex">
                                  <div className="comment-pic">
                                    <img
                                      src="./images/avatar/cmt-04.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="comment-body">
                                    <div className="name">
                                      <h5 className="font-w600 fs-18">
                                        Roger Meyer
                                      </h5>
                                      <p className="text mb-0 fs-18">
                                        Donec dapibus mauris id odio ornare
                                        tempus. Duis sit amet accumsan justo,
                                        quis tempor ligula. Quisque quis
                                        pharetra felis. Ut quis consequat orci.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="right">
                                  <div className="group-action mt-10"></div>
                                </div>
                              </div>
                              <div className="divider mb-0" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
