import { useState, useMemo, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Notifier from "../../Error/Notifier";
import ProjectPagination from "../ProjectPegenation";
import Lottie from "lottie-react";
import noproject from "../../animations/noproject.json";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { fetchDeleteAccount } from "../../utils/fetchUtils/authUtils";
import {
  fetchDeleteProject,
  fetchExtendedProjectList,
} from "../../utils/fetchUtils/projectUtils";

const AllProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [progressText, setProgressText] = useState("");
  const [connection, setConnection] = useState(null);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) =>
      statusFilter === "All" ? true : project.status === statusFilter
    );
  }, [allProjects, statusFilter]);

  const handleProjectDelete = async (id) => {
    const response = await fetchDeleteProject(id);
    // add toast
    setAllProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const fetchProjects = async () => {
    var addedProjects = await fetchExtendedProjectList();

    if (addedProjects) {
      console.log("data:", addedProjects);

      const addSource = (projects, source) =>
        projects.map((project) => ({ ...project, source }));
      const combinedProjects = addSource(addedProjects, "added");

      setAllProjects(combinedProjects);
    }
  };

  // const realTimeUpdate = () => {
  //   const token = localStorage.getItem("token");
  //   const connection = new HubConnectionBuilder()
  //     .withUrl("http://localhost:5204/connect", {
  //       accessTokenFactory: () => token,
  //     })
  //     .withAutomaticReconnect()
  //     .build();
  //   connection.on("UpdateAllProjects");
  // };

  // SignalR !!!!!!
  useEffect(() => {
    const token = localStorage.getItem("token");
    const conn = new HubConnectionBuilder()
      .withUrl("http://localhost:5204/connect", {
        accessTokenFactory: () => token,
      })
      .configureLogging("information")
      .build();

    conn
      .start()
      .then(() => {
        console.log("SignalR connected.");
      })
      .catch((err) => console.error("SignalR connection error:", err));

    conn.on("ReceiveProjectUpdate", () => {
      fetchProjects();
    });

    // setConnection(conn);

    return () => {
      if (conn) {
        conn.stop();
      }
    };
  }, []);

  // const updateProjectList = (projectId) => {
  //   const updatedPosts = allProjects.map((project) =>
  //     project.id === projectId ? { ...project, updated: true } : project
  //   );
  //   setAllProjects(updatedPosts);
  // };

  ///////////////

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="row">
      <div className="box-header pt-0 pl-0 ms-0 mb-4 mt-4 border-bottom-0 responsive-header">
        <h4 className="box-title fs-22">Recent Project Updates</h4>
        <div className="status-tabs">
          {["Pending", "OnGoing", "Completed", "All"].map((status) => (
            <div
              key={status}
              className="status-tab"
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </div>
          ))}
        </div>
      </div>
      {filteredProjects.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "5vh",
          }}
        >
          <Lottie
            style={{ width: "25vw", height: "25vh" }}
            animationData={noproject}
            loop={true}
          ></Lottie>
          <h3>
            No projects available to display. Please create or add a project to
            view its statistics.
          </h3>
        </div>
      ) : (
        <ProjectPagination
          posts={filteredProjects}
          handle={handleProjectDelete}
        ></ProjectPagination>
      )}
    </div>
  );
};

export default AllProjects;
