import { useState, useMemo, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Notifier from "../../Error/Notifier";
import ProjectPagination from "../ProjectPegenation";

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

    setProgressText("Project Deleted!");
    if (response.ok) {
      window.location.reload();
    }
  };

  const fetchProjects = async () => {
    const endpoints = [
      "https://localhost:7157/api/Project/AllProjectsUserOwn",
      "https://localhost:7157/api/Project/UserAddedProjects",
    ];

    try {
      const responses = await Promise.all(
        endpoints.map((url) =>
          fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
        )
      );

      if (responses.every((res) => res.ok)) {
        const [ownedProjects, addedProjects] = await Promise.all(
          responses.map((res) => res.json())
        );

        const addSource = (projects, source) =>
          projects.map((project) => ({ ...project, source }));

        const combinedProjects = [
          ...addSource(ownedProjects, "owned"),
          ...addSource(addedProjects, "added"),
        ];

        setAllProjects(combinedProjects);
      } else {
        console.error("Error fetching projects");
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
      {progressText !== null && <Notifier message={progressText}></Notifier>}
      <div className="box-header pt-0 pl-0 ms-0 mb-4 mt-4 border-bottom-0 responsive-header">
        <h4 className="box-title fs-22">Recent Project Updates</h4>
        <div className="status-tabs">
          {["Pending", "On Going", "Completed", "All"].map((status) => (
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
      <ProjectPagination
        posts={filteredProjects}
        handle={handleProjectDelete}
      ></ProjectPagination>
    </div>
  );
};

export default AllProjects;
