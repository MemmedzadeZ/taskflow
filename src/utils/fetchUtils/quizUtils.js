const URL = process.env.REACT_APP_API_URL;

export const fetchOccupationStatistic = async () => {
  try {
    const response = await fetch("/Quiz/OccupationStatistic", {
      method: "GET",
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchOccupationStatistic: " + error);
  }
};
export const fetchOccupationStatisticInProjects = async () => {
  try {
    const response = await fetch(URL + "/Quiz/OccupationStatisticInProjects", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchOccupationStatisticInProjects: " + error);
  }
};
export const fetchOccupation = async (selectedOption) => {
  try {
    const response = await fetch(URL + "/Quiz/Occupation", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedOption),
    });
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.log("Error in fetchOccupation: " + error);
  }
};

export const fetchProfession = async (selectedOption) => {
  try {
    const response = await fetch(URL + "/Quiz/Profession", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedOption),
    });
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.log("Error in fetchProfession: " + error);
  }
};
