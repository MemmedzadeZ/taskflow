import React, { useState, useEffect } from "react";
function ClientsCount() {
  const [clientsCount, setClientsCount] = useState(0);
  const fetchData = async () => {
    console.log("calendar message count");

    var response = await fetch(
      "https://localhost:7268/api/Auth/UsersCount",

      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    var data = await response.json();

    console.log(data);

    setClientsCount(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="box-body d-flex pb-0">
      <div className="me-auto">
        <h4 className="numb fs-30 font-wb">{clientsCount}</h4>
        <h5 className="card-title fs-18 font-w400">Total Clients</h5>
        <p className="fs-14 mb-0 mt-11">
          <span className="text-primary">-3% </span>than last month
        </p>
      </div>
      <div id="total-revenue-chart"></div>
    </div>
  );
}
export default ClientsCount;
