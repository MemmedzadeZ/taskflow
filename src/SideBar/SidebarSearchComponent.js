import CurrentPerson from "../Dashboard/CurrentUser";
import { Helmet } from "react-helmet"; // For head configurations

function SidebarSearchComponent() {
  
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Protend - Project Management Admin Dashboard HTML Template
        </title>
        <link
          rel="shortcut icon"
          href="./images/favicon.png"
          type="image/png"
        />

        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Boxicons */}
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        {/* Plugin */}
        <link rel="stylesheet" href="" />

        {/* App CSS */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/grid.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </Helmet>
      <div className="main-header">
        <div className="d-flex">
          <div className="mobile-toggle" id="mobile-toggle">
            <i className="bx bx-menu"></i>
          </div>
          <div className="main-title">Board</div>
          {/* <SidebarSearchComponent /> */}
        </div>

        <div className="d-flex align-items-center">
          {/* App Search */}
          <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <span className="bx bx-search-alt"></span>
            </div>
          </form>

          <div className="dropdown d-inline-block mt-12">
            <CurrentPerson />
          </div>
        </div>
      </div>
        ;
        
        
    </div>;
  
}

export default SidebarSearchComponent;
