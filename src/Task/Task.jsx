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
              <div className="main-title">Task</div>
            </div>

            <div className="d-flex align-items-center">
              {/* App Search */}

              <div className="dropdown d-inline-block mt-12">
                <CurrentPerson></CurrentPerson>
              </div>
            </div>
          </div>

          <>
            <div className="main">
              <div className="main-content message">
                <HeaderTaskInfo />
                <div className="row">
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
