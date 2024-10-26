function PendingProjects() {
  return (
    <div className="icon-box bg-color-7 d-block">
      <div className="content text-center color-7">
        <h5 className="title-box fs-17 font-w500">Pending Project</h5>
        <div className="themesflat-counter fs-18 font-wb">
          <span
            className="number"
            data-from={0}
            data-to={309}
            data-speed={2500}
            data-inviewport="yes"
          >
            75 +
          </span>
        </div>
      </div>
    </div>
  );
}
export default PendingProjects;
