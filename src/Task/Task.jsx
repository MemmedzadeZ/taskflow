import React from "react";
import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import "./Task.css";
import HeaderTaskInfo from "./HeaderTaskInfo";
import UserTasks from "./UserTasks";
import { useState } from "react";
import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";

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

              <SidebarSearchComponent></SidebarSearchComponent>

              <CurrentPerson />
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
