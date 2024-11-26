import { useState, useMemo, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Notifier from "../../Error/Notifier";
import ProjectPagination from "../ProjectPegenation";
import Lottie from "lottie-react";
import noproject from "../../animations/noproject.json";

const AllProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [progressText, setProgressText] = useState("");

  // Filter projects based on status
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) =>
      statusFilter === "All" ? true : project.status === statusFilter
    );
  }, [allProjects, statusFilter]);

  const handleProjectDelete = async (id) => {
    var response = await fetch(`https://localhost:7157/api/Project/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setAllProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const fetchProjects = async () => {
    try {
      var response = await fetch(
        "https://localhost:7157/api/Project/ExtendedProjectList",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        const addedProjects = await response.json(); // Read the JSON once
        console.log("data:", addedProjects);

        const addSource = (projects, source) =>
          projects.map((project) => ({ ...project, source }));
        const combinedProjects = addSource(addedProjects, "added");

        setAllProjects(combinedProjects);
      } else {
        console.error("Error fetching projects:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

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
