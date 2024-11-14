import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function BasicInfo() {
  const { email } = useParams();
  const [basicInfo, setBasicInfo] = useState([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          `https://localhost:7157/api/Profile/BasicInfoForProfil/${email}`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
          const data = await response.json();
          setBasicInfo(data);
        } else {
          console.error("Error fetching user profile");
        }
      } catch (error) {
        console.error(" Error:", error);
      }
    };

    fetchUserProfile();
  }, [email]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
  };
  return (
    <div className="col-3 col-xl-12">
      <div className="box user-pro-list overflow-hidden mb-30">
        <div className="box-body">
          <div className="user-pic text-center">
            <div className="avatar ">
              <img
                style={{ width: "120px", height: "120px" }}
                src={
                  basicInfo.path
                    ? basicInfo.path
                    : "./images/profile/user-profile.png"
                }
                alt=""
              />
              <div
                className="pulse-css"
                style={basicInfo.isOnline ? null : { backgroundColor: "grey" }}
              />
            </div>
            <div className="pro-user mt-40">
              <h5 className="pro-user-username text-dark mb-1 fs-15">
                {basicInfo.firstname} {basicInfo.lastname}
              </h5>
              <h6 className="pro-user-desc text-muted fs-14">
                {basicInfo.email}
              </h6>
              <div className="star-ratings start-ratings-main mb-10 clearfix">
                <div className="stars stars-example-fontawesome star-sm">
                  <div className="br-wrapper br-theme-fontawesome-stars">
                    <select
                      id="example-fontawesome"
                      name="rating"
                      style={{ display: "none" }}
                    >
                      <option value={1}>1</option> <option value={2}>2</option>{" "}
                      <option value={3}>3</option>{" "}
                      <option value={4} selected="">
                        4
                      </option>{" "}
                      <option value={5}>5</option>{" "}
                    </select>
                    {/* <div class="br-widget">
                                    <a href="#" data-rating-value="1" data-rating-text="1" class="br-selected"></a>
                                    <a href="#" data-rating-value="2" data-rating-text="2" class="br-selected"></a>
                                    <a href="#" data-rating-value="3" data-rating-text="3" class="br-selected"></a>
                                    <a href="#" data-rating-value="4" data-rating-text="4" class="br-selected br-current"></a>
                                    <a href="#" data-rating-value="5" data-rating-text="5"></a>
                                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box-footer pt-38">
          <div className="btn-list text-center">
            <a href="#" className="btn btn-light">
              <i className="bx bxs-envelope" />{" "}
            </a>
            <a href="#" className="btn btn-light">
              {" "}
              <i className="bx bxs-phone-call" />{" "}
            </a>
            <a href="#" className="btn btn-light">
              <i className="bx bxs-error-circle" />
            </a>
            <a href="#" className="btn btn-light">
              {" "}
              <i className="bx bxs-message-alt-edit" />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="box left-dot pt-39 mb-30">
        <div className="box-header  border-0 ">
          <div className="box-title fs-20 font-w600">Basic Info</div>
        </div>
        <div className="box-body pt-16 user-profile">
          <div className="table-responsive">
            <table className="table mb-0 mw-100 color-span">
              <tbody>
                <tr>
                  <td className="py-2 px-0">
                    {" "}
                    <span className="w-50">Country</span>{" "}
                  </td>
                  <td>:</td>
                  <td className="py-2 px-0">
                    {" "}
                    <span className="">{basicInfo.country}</span>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-0">
                    {" "}
                    <span className="w-50">Occupation</span>{" "}
                  </td>
                  <td>:</td>
                  <td className="py-2 px-0">
                    {" "}
                    <span className="">{basicInfo.occupation}</span>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-0">
                    {" "}
                    <span className="w-50">Gender</span>{" "}
                  </td>
                  <td>:</td>
                  <td className="py-2 px-0">
                    {" "}
                    <span className="">{basicInfo.gender} </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-0">
                    {" "}
                    <span className="w-50">BirthDay</span>{" "}
                  </td>
                  <td>:</td>
                  <td className="py-2 px-0">
                    {" "}
                    <span className="">
                      {formatDate(basicInfo.birthday)}
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-0">
                    {" "}
                    <span className="w-50">Phone</span>{" "}
                  </td>
                  <td>:</td>
                  <td className="py-2 px-0">
                    {" "}
                    <span className="">{basicInfo.phone}</span>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-0">
                    {" "}
                    <span className="w-50">Status</span>{" "}
                  </td>
                  <td>:</td>
                  <td className="py-2 px-0">
                    <span
                      className={`badge ${
                        basicInfo.isOnline ? "badge-success" : "badge-danger"
                      }`}
                    >
                      {basicInfo.isOnline ? "Online" : "Offline"}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BasicInfo;
