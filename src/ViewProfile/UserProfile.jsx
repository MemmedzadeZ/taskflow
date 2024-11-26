import React from "react";
import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import HeaderViewProfile from "./HeaderViewProfile";
import BasicInfo from "./BasicInfo";
import TaskList from "./TaskList";
import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";

const UserProfile = () => {
  return (
    <div>
      <div className="sidebar-expand">
        <div className="DIV">
          <SidebarComponent />

          <div className="main-header">
            <div className="d-flex">
              <div className="mobile-toggle" id="mobile-toggle">
                <i className="bx bx-menu"></i>
              </div>
              <div className="main-title">View Profile</div>
            </div>

            <div className="d-flex align-items-center">
              {/* App Search */}

              <SidebarSearchComponent></SidebarSearchComponent>

              <CurrentPerson />
            </div>
          </div>

          <div className="main">
            <div className="main-content board">
              <div className="row" style={{ alignItems: "normal" }}>
                <div className="col-9 col-xl-12">
                  <HeaderViewProfile />
                  <div className="box">
                    <div className="box-body">
                      <div className="table-responsive">
                        <TaskList />
                      </div>
                    </div>
                  </div>
                </div>
                <BasicInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
