import React from "react";
import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import "./Task.css";
import HeaderTaskInfo from "./HeaderTaskInfo";
import UserTasks from "./UserTasks";
import { useState } from "react";
import CreateTaskModel from "./TaskComponents/CreateTaskModel";
const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModel = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
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
              <div className="main-title">Task</div>
            </div>

            <div className="d-flex align-items-center">
              {/* App Search */}
              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </form>

              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-search-alt"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary h-100"
                            type="submit"
                          >
                            <i className="bx bx-search-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="dropdown d-inline-block mt-12">
                <CurrentPerson></CurrentPerson>
              </div>
            </div>
          </div>

          <>
            <div className="main">
              <div className="main-content message">
                <div className="row">
                  <HeaderTaskInfo />
                  <div className="col-88 col-md-112">
                    <div className="box message-info">
                      {/* /.box-info-messager */}

                      <div className="tasks-container">
                        <header className="tasks-header">
                          <h2>Tasks</h2>

                          <button
                            className="create-task-button"
                            onClick={openModel}
                          >
                            + Create Task
                          </button>
                        </header>
                        <UserTasks />
                      </div>
                    </div>
                  </div>
                </div>
                {isModalOpen && <CreateTaskModel closeModal={closeModal} />}
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
