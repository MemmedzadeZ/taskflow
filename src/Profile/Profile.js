// import React, { useEffect } from "react";

// const Profile = () =>  {
//   <>
//     {/* Page Title */}
//     <title>Dashmin - Multipurpose Bootstrap Dashboard Template</title>
//     {/* Meta Data */}
//     <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//     <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="description" content="" />
//     <meta name="keywords" content="" />
//     {/* Favicon */}
//     <link rel="shortcut icon" href="../../../assets/img/favicon.png" />
//     {/* Web Fonts */}
//     <link
//       href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i&display=swap"
//       rel="stylesheet"
//     />
//     {/* ======= BEGIN GLOBAL MANDATORY STYLES ======= */}
//     <link
//       rel="stylesheet"
//       href="../../../assets/bootstrap/css/bootstrap.min.css"
//     />
//     <link
//       rel="stylesheet"
//       href="../../../assets/fonts/icofont/icofont.min.css"
//     />
//     <link
//       rel="stylesheet"
//       href="../../../assets/plugins/perfect-scrollbar/perfect-scrollbar.min.css"
//     />
//     {/* ======= END BEGIN GLOBAL MANDATORY STYLES ======= */}
//     {/* ======= BEGIN PAGE LEVEL PLUGINS STYLES ======= */}
//     <link rel="stylesheet" href="../../../assets/plugins/apex/apexcharts.css" />
//     {/* ======= END BEGIN PAGE LEVEL PLUGINS STYLES ======= */}
//     {/* ======= MAIN STYLES ======= */}
//     <link rel="stylesheet" href="../../../assets/css/style.css" />
//     {/* ======= END MAIN STYLES ======= */}
//     {/* Offcanval Overlay */}
//     <div className="offcanvas-overlay" />
//     {/* Offcanval Overlay */}
//     {/* Wrapper */}
//     <div className="wrapper">
//       {/* Header */}
//       <header className="header white-bg fixed-top d-flex align-content-center flex-wrap">
//         {/* Logo */}
//         <div className="logo">
//           <a href="../../../index.html" className="default-logo">
//             <img src="../../../assets/img/logo.png" alt="" />
//           </a>
//           <a href="../../../index.html" className="mobile-logo">
//             <img src="../../../assets/img/mobile-logo.png" alt="" />
//           </a>
//         </div>
//         {/* End Logo */}
//         {/* Main Header */}
//         <div className="main-header">
//           <h2>Salamm</h2>
//           <div className="container-fluid">
//             <div className="row justify-content-between">
//               <div className="col-3 col-lg-1 col-xl-4">
//                 {/* Header Left */}
//                 <div className="main-header-left h-100 d-flex align-items-center">
//                   {/* Main Header User */}
//                   <div className="main-header-user">
//                     <a
//                       href="#"
//                       className="d-flex align-items-center"
//                       data-toggle="dropdown"
//                     >
//                       <div className="menu-icon">
//                         <span />
//                         <span />
//                         <span />
//                       </div>
//                       <div className="user-profile d-xl-flex align-items-center d-none">
//                         {/* User Avatar */}
//                         <div className="user-avatar">
//                           <img
//                             src="../../../assets/img/avatar/user.png"
//                             alt=""
//                           />
//                         </div>
//                         {/* End User Avatar */}
//                         {/* User Info */}
//                         <div className="user-info">
//                           <h4 className="user-name">Abrilay Khatun</h4>
//                           <p className="user-email">abrilakh@gmail.com</p>
//                         </div>
//                         {/* End User Info */}
//                       </div>
//                     </a>
//                     <div className="dropdown-menu">
//                       <a href="#">My Profile</a>
//                       <a href="#">task</a>
//                       <a href="#">Settings</a>
//                       <a href="#">Log Out</a>
//                     </div>
//                   </div>
//                   {/* End Main Header User */}
//                   {/* Main Header Menu */}
//                   <div className="main-header-pin d-block d-lg-none">
//                     <div className="header-toogle-menu">
//                       <img src="../../../assets/img/menu.png" alt="" />
//                     </div>
//                   </div>
//                   {/* End Main Header Menu */}
//                 </div>
//                 {/* End Header Left */}
//               </div>
//               <div className="col-9 col-lg-11 col-xl-8">
//                 {/* Header Right */}
//                 <div className="main-header-right d-flex justify-content-end">
//                   <ul className="nav">
//                     <li className="ml-0">
//                       {/* Main Header Language */}
//                       <div className="main-header-language">
//                         <a href="#" data-toggle="dropdown">
//                           <img
//                             src="../../../assets/img/svg/globe-icon.svg"
//                             alt=""
//                           />
//                         </a>
//                         <div className="dropdown-menu style--three">
//                           <a href="#">
//                             <span>
//                               <img src="../../../assets/img/usa.png" alt="" />
//                             </span>
//                             USA
//                           </a>
//                           <a href="#">
//                             <span>
//                               <img src="../../../assets/img/china.png" alt="" />
//                             </span>
//                             China
//                           </a>
//                           <a href="#">
//                             <span>
//                               <img
//                                 src="../../../assets/img/russia.png"
//                                 alt=""
//                               />
//                             </span>
//                             Russia
//                           </a>
//                           <a href="#">
//                             <span>
//                               <img src="../../../assets/img/spain.png" alt="" />
//                             </span>
//                             Spain
//                           </a>
//                           <a href="#">
//                             <span>
//                               <img
//                                 src="../../../assets/img/brazil.png"
//                                 alt=""
//                               />
//                             </span>
//                             Brazil
//                           </a>
//                           <a href="#">
//                             <span>
//                               <img
//                                 src="../../../assets/img/france.png"
//                                 alt=""
//                               />
//                             </span>
//                             France
//                           </a>
//                           <a href="#">
//                             <span>
//                               <img
//                                 src="../../../assets/img/algeria.png"
//                                 alt=""
//                               />
//                             </span>
//                             Algeria
//                           </a>
//                         </div>
//                       </div>
//                       {/* End Main Header Language */}
//                     </li>
//                     <li className="ml-0 d-none d-lg-flex">
//                       {/* Main Header Print */}
//                       <div className="main-header-print">
//                         <a href="#">
//                           <img
//                             src="../../../assets/img/svg/print-icon.svg"
//                             alt=""
//                           />
//                         </a>
//                       </div>
//                       {/* End Main Header Print */}
//                     </li>
//                     <li className="d-none d-lg-flex">
//                       {/* Main Header Time */}
//                       <div className="main-header-date-time text-right">
//                         <h3 className="time">
//                           <span id="hours">21</span>
//                           <span id="point">:</span>
//                           <span id="min">06</span>
//                         </h3>
//                         <span className="date">
//                           <span id="date">Tue, 12 October 2019</span>
//                         </span>
//                       </div>
//                       {/* End Main Header Time */}
//                     </li>
//                     <li className="d-none d-lg-flex">
//                       {/* Main Header Button */}
//                       <div className="main-header-btn ml-md-1">
//                         <a href="#" className="btn">
//                           Pending Tasks
//                         </a>
//                       </div>
//                       {/* End Main Header Button */}
//                     </li>
//                     <li className="order-2 order-sm-0">
//                       {/* Main Header Search */}
//                       <div className="main-header-search">
//                         <form action="#" className="search-form">
//                           <div className="theme-input-group header-search">
//                             <input
//                               type="text"
//                               className="theme-input-style"
//                               placeholder="Search Here"
//                             />
//                             <button type="submit">
//                               <img
//                                 src="../../../assets/img/svg/search-icon.svg"
//                                 alt=""
//                                 className="svg"
//                               />
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                       {/* End Main Header Search */}
//                     </li>
//                     <li>
//                       {/* Main Header Messages */}
//                       <div className="main-header-message">
//                         <a
//                           href="#"
//                           className="header-icon"
//                           data-toggle="dropdown"
//                         >
//                           <img
//                             src="../../../assets/img/svg/message-icon.svg"
//                             alt=""
//                             className="svg"
//                           />
//                         </a>
//                         <div className="dropdown-menu">
//                           {/* Dropdown Header */}
//                           <div className="dropdown-header d-flex align-items-center justify-content-between">
//                             <h5>3 Unread messages</h5>
//                             <a href="#" className="text-mute d-inline-block">
//                               Clear all
//                             </a>
//                           </div>
//                           {/* End Dropdown Header */}
//                           {/* Dropdown Body */}
//                           <div className="dropdown-body">
//                             {/* Item Single */}
//                             <a
//                               href="#"
//                               className="item-single d-flex media align-items-center"
//                             >
//                               <div className="figure">
//                                 <img
//                                   src="../../../assets/img/avatar/m1.png"
//                                   alt=""
//                                 />
//                                 <span className="avatar-status bg-teal" />
//                               </div>
//                               <div className="content media-body">
//                                 <div className="d-flex align-items-center mb-2">
//                                   <h6 className="name">Sender Name</h6>
//                                   <p className="time">2 min ago</p>
//                                 </div>
//                                 <p className="main-text">
//                                   Donec dapibus mauris id odio ornare tempus.
//                                   Duis sit amet accumsan justo.
//                                 </p>
//                               </div>
//                             </a>
//                             {/* End Item Single */}
//                             {/* Item Single */}
//                             <a
//                               href="#"
//                               className="item-single d-flex media align-items-center"
//                             >
//                               <div className="figure">
//                                 <img
//                                   src="../../../assets/img/avatar/m2.png"
//                                   alt=""
//                                 />
//                                 <span className="avatar-status bg-teal" />
//                               </div>
//                               <div className="content media-body">
//                                 <div className="d-flex align-items-center mb-2">
//                                   <h6 className="name">Tonya Lee</h6>
//                                   <p className="time">2 min ago</p>
//                                 </div>
//                                 <p className="main-text">
//                                   Donec dapibus mauris id odio ornare tempus.
//                                   Duis sit amet accumsan justo.
//                                 </p>
//                               </div>
//                             </a>
//                             {/* End Item Single */}
//                             {/* Item Single */}
//                             <a
//                               href="#"
//                               className="item-single d-flex media align-items-center"
//                             >
//                               <div className="figure">
//                                 <img
//                                   src="../../../assets/img/avatar/m3.png"
//                                   alt=""
//                                 />
//                                 <span className="avatar-status bg-teal" />
//                               </div>
//                               <div className="content media-body">
//                                 <div className="d-flex align-items-center mb-2">
//                                   <h6 className="name">Cathy Nichols</h6>
//                                   <p className="time">2 min ago</p>
//                                 </div>
//                                 <p className="main-text">
//                                   Donec dapibus mauris id odio ornare tempus.
//                                   Duis sit amet accumsan justo.
//                                 </p>
//                               </div>
//                             </a>
//                             {/* End Item Single */}
//                             {/* Item Single */}
//                             <a
//                               href="#"
//                               className="item-single d-flex media align-items-center"
//                             >
//                               <div className="figure">
//                                 <img
//                                   src="../../../assets/img/avatar/m4.png"
//                                   alt=""
//                                 />
//                                 <span className="avatar-status bg-teal" />
//                               </div>
//                               <div className="content media-body">
//                                 <div className="d-flex align-items-center mb-2">
//                                   <h6 className="name">Hubert Griffith</h6>
//                                   <p className="time">2 min ago</p>
//                                 </div>
//                                 <p className="main-text">
//                                   Donec dapibus mauris id odio ornare tempus.
//                                   Duis sit amet accumsan justo.
//                                 </p>
//                               </div>
//                             </a>
//                             {/* End Item Single */}
//                           </div>
//                           {/* End Dropdown Body */}
//                         </div>
//                       </div>
//                       {/* End Main Header Messages */}
//                     </li>
//                     <li>
//                       {/* Main Header Notification */}
//                       <div className="main-header-notification">
//                         <a
//                           href="#"
//                           className="header-icon notification-icon"
//                           data-toggle="dropdown"
//                         >
//                           <span
//                             className="count"
//                             data-bg-img="../../../assets/img/count-bg.png"
//                           >
//                             22
//                           </span>
//                           <img
//                             src="../../../assets/img/svg/notification-icon.svg"
//                             alt=""
//                             className="svg"
//                           />
//                         </a>
//                         <div className="dropdown-menu style--two">
//                           {/* Dropdown Header */}
//                           <div className="dropdown-header d-flex align-items-center justify-content-between">
//                             <h5>5 New notifications</h5>
//                             <a href="#" className="text-mute d-inline-block">
//                               Clear all
//                             </a>
//                           </div>
//                           {/* End Dropdown Header */}
//                           {/* Dropdown Body */}
//                           <div className="dropdown-body">
//                             {/* Item Single */}
//                             <a
//                               href="#"
//                               className="item-single d-flex align-items-center"
//                             >
//                               <div className="content">
//                                 <div className="mb-2">
//                                   <p className="time">2 min ago</p>
//                                 </div>
//                                 <p className="main-text">
//                                   Donec dapibus mauris id odio ornare tempus
//                                   amet.
//                                 </p>
//                               </div>
//                             </a>
//                             {/* End Item Single */}
//                             {/* Item Single */}
//                             <a
//                               href="#"
//                               className="item-single d-flex align-items-center"
//                             >
//                               <div className="content">
//                                 <div className="mb-2">
//                                   <p className="time">2 min ago</p>
//                                 </div>
//                                 <p className="main-text">
//                                   Donec dapibus mauris id odio ornare tempus.
//                                   Duis sit amet accumsan justo.
//                                 </p>
//                               </div>
//                             </a>
//                             {/* End Item Single */}
//                             {/* Item Single */}
//                             <a
//                               href="#"
//                               className="item-single d-flex align-items-center"
//                             >
//                               <div className="content">
//                                 <div className="mb-2">
//                                   <p className="time">2 min ago</p>
//                                 </div>
//                                 <p className="main-text">
//                                   Donec dapibus mauris id odio ornare tempus.
//                                   Duis sit amet accumsan justo.
//                                 </p>
//                               </div>
//                             </a>
//                             {/* End Item Single */}
//                             {/* Item Single */}
//                             <a
//                               href="#"
//                               className="item-single d-flex align-items-center"
//                             >
//                               <div className="content">
//                                 <div className="mb-2">
//                                   <p className="time">2 min ago</p>
//                                 </div>
//                                 <p className="main-text">
//                                   Donec dapibus mauris id odio ornare tempus.
//                                   Duis sit amet accumsan justo.
//                                 </p>
//                               </div>
//                             </a>
//                             {/* End Item Single */}
//                           </div>
//                           {/* End Dropdown Body */}
//                         </div>
//                       </div>
//                       {/* End Main Header Notification */}
//                     </li>
//                   </ul>
//                 </div>
//                 {/* End Header Right */}
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* End Main Header */}
//       </header>
//       {/* End Header */}
//       {/* Main Wrapper */}
//       <div className="main-wrapper">
//         {/* Sidebar */}
//         <nav className="sidebar" data-trigger="scrollbar">
//           {/* Sidebar Header */}
//           <div className="sidebar-header d-none d-lg-block">
//             {/* Sidebar Toggle Pin Button */}
//             <div className="sidebar-toogle-pin">
//               <i className="icofont-tack-pin" />
//             </div>
//             {/* End Sidebar Toggle Pin Button */}
//           </div>
//           {/* End Sidebar Header */}
//           {/* Sidebar Body */}
//           <div className="sidebar-body">
//             {/* Nav */}
//             <ul className="nav">
//               <li className="nav-category">Main</li>
//               <li>
//                 <a href="../../../index.html">
//                   <i className="icofont-pie-chart" />
//                   <span className="link-title">Dashboard</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-shopping-cart" />
//                   <span className="link-title">Ecommerce</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../ecommerce/ecommerce.html">Dashboard 1</a>
//                   </li>
//                   <li>
//                     <a href="../../ecommerce/ecommerce2.html">dashboard 2</a>
//                   </li>
//                   <li>
//                     <a href="../../ecommerce/orders.html">orders</a>
//                   </li>
//                   <li>
//                     <a href="../../ecommerce/product-catelog.html">
//                       Products Catalog
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../ecommerce/product-details.html">
//                       Product Details
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../ecommerce/cartlist.html">cart list</a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li>
//                 <a href="../../../pages/social-media.html">
//                   <i className="icofont-chart-histogram" />
//                   <span className="link-title">Social Media Analytics</span>
//                 </a>
//               </li>
//               <li className="nav-category">apps</li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-mail-box" />
//                   <span className="link-title">Email</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../apps/email/inbox.html">Inbox</a>
//                   </li>
//                   <li>
//                     <a href="../../apps/email/read.html">Read</a>
//                   </li>
//                   <li>
//                     <a href="../../apps/email/compose.html">Compose</a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li>
//                 <a href="../../apps/chat.html">
//                   <i className="icofont-wechat" />
//                   <span className="link-title">Chat</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-listing-box" />
//                   <span className="link-title">To Do List</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../apps/todolist/todolist.html">Tasks</a>
//                   </li>
//                   <li>
//                     <a href="../../apps/todolist/add-new.html">add new</a>
//                   </li>
//                   <li>
//                     <a href="../../apps/todolist/task-details.html">details</a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li>
//                 <a href="../../apps/calendar.html">
//                   <i className="icofont-calendar" />
//                   <span className="link-title">Calendar</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-file-document" />
//                   <span className="link-title">invoice</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../apps/invoice/invoice-list.html">
//                       Invoice List
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../apps/invoice/invoice-details.html">
//                       details
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../apps/invoice/invoice-add-new.html">
//                       add new
//                     </a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-contact-add" />
//                   <span className="link-title">contact</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../apps/contact/contact-list.html">list view</a>
//                   </li>
//                   <li>
//                     <a href="../../apps/contact/contact-grid.html">grid view</a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-calendar" />
//                   <span className="link-title">project manager</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../apps/project-manager/project.html">
//                       project status
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../apps/project-manager/task-list.html">
//                       task list
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../apps/project-manager/create-new.html">
//                       create new Board
//                     </a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-files-stack" />
//                   <span className="link-title">file manager</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../apps/file-manager/file-info.html">
//                       file info
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../apps/file-manager/share.html">share</a>
//                   </li>
//                   <li>
//                     <a href="../../apps/file-manager/upload.html">
//                       upload new file
//                     </a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li className="nav-category">UI Elements</li>
//               <li>
//                 <a href="../../ui-elements/widget.html">
//                   <i className="icofont-magic-alt" />
//                   <span className="link-title">widgets</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-brand-icofont" />
//                   <span className="link-title">Icons (Aniloan)</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../ui-elements/icons/iconfont.html">ico font</a>
//                   </li>
//                   <li>
//                     <a href="../../ui-elements/icons/materializeicon.html">
//                       Materialize Icons
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../ui-elements/icons/et-lineicon.html">
//                       Et-Line Icons
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../ui-elements/icons/eleganticon.html">
//                       Elegant Icons
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../ui-elements/icons/pe-7strokeicon.html">
//                       Pe-7 Stroke Icons
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../ui-elements/icons/themifyicon.html">
//                       Themify Icons
//                     </a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li>
//                 <a href="../../ui-elements/color.html">
//                   <i className="icofont-eye-dropper" />
//                   <span className="link-title">color</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../ui-elements/extra-component.html">
//                   <i className="icofont-plus" />
//                   <span className="link-title">extra Component</span>
//                 </a>
//               </li>
//               <li className="nav-category">Form &amp; Table</li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-table" />
//                   <span className="link-title">Form Elements</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../form&table/form-elements/base-input.html">
//                       Base Input
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../form&table/form-elements/input-group.html">
//                       Input Groups
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../form&table/form-elements/checkbox.html">
//                       Checkbox
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../form&table/form-elements/radio.html">
//                       radio
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../form&table/form-elements/switch.html">
//                       Switch
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../form&table/form-elements/number-input.html">
//                       Number Input
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../form&table/form-elements/textarea.html">
//                       Text Area
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../form&table/form-elements/text-editor.html">
//                       Text Editor (Quill Editor)
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../form&table/form-elements/file-uploader.html">
//                       File Uploader
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../form&table/form-elements/datetime-picker.html">
//                       Date &amp; Time Picker
//                     </a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li>
//                 <a href="../../form&table/form-layout.html">
//                   <i className="icofont-layout" />
//                   <span className="link-title">Form Layout</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../form&table/form-wizard.html">
//                   <i className="icofont-ui-file" />
//                   <span className="link-title">Form Wizard</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../form&table/form-validation.html">
//                   <i className="icofont-exclamation-circle" />
//                   <span className="link-title">Form Validation</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../form&table/form-repeater.html">
//                   <i className="icofont-meeting-add" />
//                   <span className="link-title">Form Repeater</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../form&table/table.html">
//                   <i className="icofont-table" />
//                   <span className="link-title">Table</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../form&table/table-extended.html">
//                   <i className="icofont-contact-add" />
//                   <span className="link-title">Table Extended</span>
//                 </a>
//               </li>
//               <li className="nav-category">pages</li>
//               <li className="active sub-menu-opened">
//                 <a href="#">
//                   <i className="icofont-ui-user" />
//                   <span className="link-title">User Profile</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="news-feed.html">News Feed</a>
//                   </li>
//                   <li>
//                     <a href="about.html">about</a>
//                   </li>
//                   <li>
//                     <a href="gallery.html">gallery</a>
//                   </li>
//                   <li>
//                     <a href="connection.html">Connections</a>
//                   </li>
//                   <li>
//                     <a href="profile-chat.html">Chat</a>
//                   </li>
//                   <li>
//                     <a href="edit-profile.html">Edit Profile</a>
//                   </li>
//                   <li className="active">
//                     <a href="user-dashboard.html">User Dashboard</a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li>
//                 <a href="../../pages/faq.html">
//                   <i className="icofont-support-faq" />
//                   <span className="link-title">FAQ</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../pages/price.html">
//                   <i className="icofont-price" />
//                   <span className="link-title">Pricing</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../pages/timeline.html">
//                   <i className="icofont-clock-time" />
//                   <span className="link-title">Timeline</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../pages/account-setting.html">
//                   <i className="icofont-settings-alt" />
//                   <span className="link-title">Account Settings</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-check-circled" />
//                   <span className="link-title">Authentication</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../pages/authentication/login.html">Log In</a>
//                   </li>
//                   <li>
//                     <a href="../../pages/authentication/register.html">
//                       Register
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../pages/authentication/forget-pass.html">
//                       Forget Password
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../pages/authentication/reset-pass.html">
//                       Reset Password
//                     </a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-exclamation-tringle" />
//                   <span className="link-title">Miscellaneous</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../pages/miscellaneous/comming-soon.html">
//                       Coming Soon
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../pages/miscellaneous/404.html">404 Error</a>
//                   </li>
//                   <li>
//                     <a href="../../pages/miscellaneous/500.html">500 Error</a>
//                   </li>
//                   <li>
//                     <a href="../../pages/miscellaneous/page-not-authorized.html">
//                       Not Authorized
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../pages/miscellaneous/maintenance.html">
//                       Maintenance
//                     </a>
//                   </li>
//                   <li>
//                     <a href="../../pages/miscellaneous/session-timeout.html">
//                       Session Timeout
//                     </a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li className="nav-category">Chart &amp; Maps</li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-chart-pie-alt" />
//                   <span className="link-title">charts</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="../../charts/apex.html">Apex</a>
//                   </li>
//                   <li>
//                     <a href="../../charts/chartjs.html">Chartjs</a>
//                   </li>
//                   <li>
//                     <a href="../../charts/morrischart.html">Morris Chart</a>
//                   </li>
//                   <li>
//                     <a href="../../charts/flotchart.html">Flot Chart</a>
//                   </li>
//                   <li>
//                     <a href="../../charts/chartist.html">Chartist Chart</a>
//                   </li>
//                   <li>
//                     <a href="../../charts/c3-chart.html">C3 Chart</a>
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li className="nav-category">Extensions</li>
//               <li>
//                 <a href="../../extensions/sweet-alert.html">
//                   <i className="icofont-notification" />
//                   <span className="link-title">Sweet Alert</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../extensions/toastr.html">
//                   <i className="icofont-dice" />
//                   <span className="link-title">Toastr</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../extensions/noui-slider.html">
//                   <i className="icofont-filter" />
//                   <span className="link-title">NoUi Slider</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../extensions/dragdrop.html">
//                   <i className="icofont-drag" />
//                   <span className="link-title">Drag &amp; Drop</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../extensions/tour.html">
//                   <i className="icofont-education" />
//                   <span className="link-title">Tour</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../extensions/swiper.html">
//                   <i className="icofont-swoosh-right" />
//                   <span className="link-title">Swiper</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../extensions/treeview.html">
//                   <i className="icofont-tree-alt" />
//                   <span className="link-title">Treeview</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../extensions/block-ui.html">
//                   <i className="icofont-card" />
//                   <span className="link-title">Block-UI</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../extensions/media-player.html">
//                   <i className="icofont-multimedia" />
//                   <span className="link-title">Media Player</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="../../extensions/i18n.html">
//                   <i className="icofont-globe" />
//                   <span className="link-title">i18n</span>
//                 </a>
//               </li>
//               <li className="nav-category">others</li>
//               <li>
//                 <a href="#">
//                   <i className="icofont-navigation-menu" />
//                   <span className="link-title">Menu Levels</span>
//                 </a>
//                 {/* Sub Menu */}
//                 <ul className="nav sub-menu">
//                   <li>
//                     <a href="#">Second Level 01</a>
//                     {/* Sub Menu */}
//                     <ul className="nav sub-menu">
//                       <li>
//                         <a href="#">Third Level 01</a>
//                       </li>
//                       <li>
//                         <a href="#">Third Level 02</a>
//                       </li>
//                     </ul>
//                     {/* End Sub Menu */}
//                   </li>
//                   <li>
//                     <a href="#">Second Level 02</a>
//                     {/* Sub Menu */}
//                     <ul className="nav sub-menu">
//                       <li>
//                         <a href="#">Third Level 01</a>
//                       </li>
//                       <li>
//                         <a href="#">Third Level 02</a>
//                       </li>
//                     </ul>
//                     {/* End Sub Menu */}
//                   </li>
//                 </ul>
//                 {/* End Sub Menu */}
//               </li>
//               <li>
//                 <a href="#" className="disabled">
//                   <i className="icofont-not-allowed" />
//                   <span className="link-title">Disable Menu</span>
//                 </a>
//               </li>
//               <li className="nav-category">Support</li>
//             </ul>
//             {/* End Nav */}
//           </div>
//           {/* End Sidebar Body */}
//         </nav>
//         {/* End Sidebar */}
//         {/* Main Content */}
//         <div className="main-content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">
//                 <div className="card">
//                   {/* User Profile Image */}
//                   <div className="user-profile-img">
//                     <div className="cover-img">
//                       <img
//                         src="../../../assets/img/media/cover.jpg"
//                         className="w-100"
//                         alt=""
//                       />
//                       {/* Upload Photo */}
//                       <div className="upload-button">
//                         <img
//                           src="../../../assets/img/svg/gallery.svg"
//                           alt=""
//                           className="svg ml-2"
//                         />
//                         <span>Upload Photo</span>
//                         <input
//                           className="file-input"
//                           type="file"
//                           id="fileUpload3"
//                           accept="image/*"
//                         />
//                       </div>
//                       {/* End Upload Photo */}
//                     </div>
//                   </div>
//                   {/* End User Profile Image */}
//                 </div>
//                 <div className="mx-2 mx-lg-4 mx-xl-5">
//                   <div className="card mt-1">
//                     {/* User Profile Nav */}
//                     <div className="user-profile-nav d-flex justify-content-xl-between align-items-xl-center flex-column flex-xl-row">
//                       {/* Profile Info */}
//                       <div className="profile-info d-flex align-items-center">
//                         <div className="profile-pic ml-3">
//                           <img
//                             src="../../../assets/img/media/profile-pic.jpg"
//                             alt=""
//                           />
//                           {/* Upload Photo */}
//                           <div className="upload-button">
//                             <img
//                               src="../../../assets/img/svg/gallery.svg"
//                               alt=""
//                               className="svg ml-2"
//                             />
//                             <span>Upload Photo</span>
//                             <input
//                               className="file-input"
//                               type="file"
//                               id="fileUpload2"
//                               accept="image/*"
//                             />
//                           </div>
//                           {/* End Upload Photo */}
//                         </div>
//                         <div>
//                           <h3>Abrilay Khatun</h3>
//                           <p className="font-14">
//                             Head Of Business Development
//                           </p>
//                         </div>
//                       </div>
//                       {/* End Profile Info */}
//                       <div className="d-flex align-items-center mt-3 mt-xl-0">
//                         <ul className="nav profile-nav-tabs">
//                           <li>
//                             <a
//                               href="profile-chat.html"
//                               className="pr-0 pl-2 pl-xl-30"
//                             >
//                               <span className="chat">
//                                 <img
//                                   src="../../../assets/img/svg/chat-icon.svg"
//                                   alt=""
//                                   className="svg"
//                                 />
//                               </span>
//                             </a>
//                           </li>
//                           <li>
//                             <a className="conncetion" href="connection.html">
//                               <div className="btn-circle ml-20">
//                                 <img
//                                   src="../../../assets/img/svg/user-check.svg"
//                                   alt=""
//                                   className="svg"
//                                 />
//                               </div>
//                               <div className="font-14">
//                                 <h4>154</h4>
//                                 <p className="font-14 text_color">
//                                   Connections
//                                 </p>
//                               </div>
//                             </a>
//                           </li>
//                           <li>
//                             <a className="p_nav-link" href="about.html">
//                               About
//                             </a>
//                           </li>
//                           <li>
//                             <a className="p_nav-link" href="gallery.html">
//                               Gallery
//                             </a>
//                           </li>
//                           <li>
//                             <a
//                               className="p_nav-link has-before"
//                               href="news-feed.html"
//                             >
//                               News Feed
//                             </a>
//                           </li>
//                         </ul>
//                         <div className="px-3">
//                           {/* Dropdown Button */}
//                           <div className="dropdown-button">
//                             <a
//                               href="#"
//                               className="d-flex align-items-center"
//                               data-toggle="dropdown"
//                             >
//                               <div className="menu-icon style--two w-auto justify-content-center mr-0">
//                                 <span />
//                                 <span />
//                                 <span />
//                               </div>
//                             </a>
//                             <div className="dropdown-menu">
//                               <a href="edit-profile.html">Edit Profile</a>
//                               <a href="user-dashboard.html">User Dashboard</a>
//                             </div>
//                           </div>
//                           {/* End Dropdown Button */}
//                         </div>
//                       </div>
//                     </div>
//                     {/* End User Profile Nav */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-30">
//               <div className="row">
//                 <div className="col-xl-2 col-lg-4 col-sm-6">
//                   {/* Card */}
//                   <div className="card mb-30">
//                     <div className="statistics-bounce-rate d-flex align-items-center justify-content-between">
//                       <div className="state-content">
//                         <p className="font-14 mb-2">Member Profit</p>
//                         <h3>$25k</h3>
//                       </div>
//                       <div className="state-icon">
//                         <img
//                           src="../../../assets/img/png-icon/bar.png"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {/* End Card */}
//                 </div>
//                 <div className="col-xl-2 col-lg-4 col-sm-6">
//                   {/* Card */}
//                   <div className="card mb-30">
//                     <div className="statistics-bounce-rate order style--two d-flex align-items-center justify-content-between">
//                       <div className="state-content">
//                         <p className="font-14 mb-2">Orders</p>
//                         <h3>568</h3>
//                       </div>
//                       <div className="state-icon">
//                         <img
//                           src="../../../assets/img/png-icon/badge.png"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {/* End Card */}
//                 </div>
//                 <div className="col-xl-2 col-lg-4 col-sm-6">
//                   {/* Card */}
//                   <div className="card mb-30">
//                     <div className="statistics-bounce-rate report d-flex align-items-center justify-content-between">
//                       <div className="state-content">
//                         <p className="font-14 mb-2">Issue Reports</p>
//                         <h3>165</h3>
//                       </div>
//                       <div className="state-icon">
//                         <img
//                           src="../../../assets/img/png-icon/report.png"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {/* End Card */}
//                 </div>
//                 <div className="col-xl-2 col-lg-4 col-sm-6">
//                   {/* Card */}
//                   <div className="card mb-30">
//                     <div className="statistics-bounce-rate support d-flex align-items-center justify-content-between">
//                       <div className="state-content">
//                         <p className="font-14 mb-2">Customer Support</p>
//                         <h3>354</h3>
//                       </div>
//                       <div className="state-icon">
//                         <img
//                           src="../../../assets/img/png-icon/what.png"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {/* End Card */}
//                 </div>
//                 <div className="col-xl-4 col-lg-8">
//                   <div className="project-deadline d-flex align-items-center c2-bg mb-30">
//                     {/* Progress */}
//                     <div className="progress_23 ml-3">
//                       <div className="ProgressBar-wrap2 position-relative">
//                         <div
//                           className="ProgressBar ProgressBar_23"
//                           data-progress={75}
//                         >
//                           <svg
//                             className="ProgressBar-contentCircle"
//                             viewBox="0 0 200 200"
//                           >
//                             {/* on rotation circle */}
//                             <circle
//                               transform="rotate(-90, 100, 100)"
//                               className="ProgressBar-background"
//                               cx={100}
//                               cy={100}
//                               r={85}
//                             />
//                             <circle
//                               transform="rotate(-90, 100, 100)"
//                               className="ProgressBar-circle"
//                               cx={100}
//                               cy={100}
//                               r={85}
//                             />
//                           </svg>
//                           <span className="ProgressBar-percentage ProgressBar-percentage--count" />
//                         </div>
//                       </div>
//                     </div>
//                     {/* End Progress */}
//                     <div className="">
//                       <h4 className="white font-20 mb-1">Project Deadline</h4>
//                       <p>
//                         Vestibulum blandit viverra convallis. Pellentesque
//                         ligula urnafermentum ut semper intincidunt nec.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xl-4 col-md-6">
//                   {/* News */}
//                   <div className="card mb-30">
//                     <div className="card-body latest-update">
//                       <h4 className="mb-20">Latest Updates</h4>
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single pt-0 border-bottom d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="text-danger font-14 bold">
//                             Issue
//                           </span>
//                           <p>
//                             Duis mauris augue, efficitur eu arcu sit amet,
//                             posuere dignissim neque. Aenean enim sem, pharetra
//                             et magna sit ame.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single border-bottom d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="text-success font-14 bold">
//                             Done
//                           </span>
//                           <p className="mb-1">
//                             Duis mauris augue, efficitur eu arcu sit amet,
//                             posuere dignissim neque. Aenean enim sem, pharetra
//                             et magna sit ame.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single border-bottom d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="text-info font-14 bold">Fixed</span>
//                           <p className="mb-1">
//                             Duis mauris augue, efficitur eu arcu sit amet,
//                             posuere dignissim neque. Aenean enim sem, pharetra
//                             et magna sit ame.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single border-bottom d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="text-pink font-14 bold">
//                             UPdated
//                           </span>
//                           <p className="mb-1">
//                             Duis mauris augue, efficitur eu arcu sit amet,
//                             posuere dignissim neque. Aenean enim sem, pharetra
//                             et magna sit ame.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single pb-0 d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="text-warning font-14 bold">Bug</span>
//                           <p className="mb-1">
//                             Duis mauris augue, efficitur eu arcu sit amet,
//                             posuere dignissim neque. Aenean enim sem, pharetra
//                             et magna sit ame.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                     </div>
//                     {/* End Notifications */}
//                   </div>
//                   {/* End News */}
//                   {/* Card */}
//                   <div className="card mb-30">
//                     <div className="card-body">
//                       <div className="title-content mb-4 mb-sm-0">
//                         <h4>Top Followers</h4>
//                       </div>
//                     </div>
//                     {/* Table Responsive */}
//                     <div className="table-responsive">
//                       <table className="style--five text-nowrap">
//                         <thead>
//                           <tr>
//                             <th>Profile</th>
//                             <th>Country</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>
//                               <div className="d-flex align-items-center">
//                                 <div className="img">
//                                   <img
//                                     src="../../../assets/img/avatar/f1.png"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="name">Kary Threlkeld</div>
//                               </div>
//                             </td>
//                             <td>USA</td>
//                             <td>
//                               <a href="#" className="follow-btn">
//                                 Follow <i className="icofont-arrow-right" />
//                               </a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>
//                               <div className="d-flex align-items-center">
//                                 <div className="img">
//                                   <img
//                                     src="../../../assets/img/avatar/f2.png"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="name">Kizzy Savoy</div>
//                               </div>
//                             </td>
//                             <td>China</td>
//                             <td>
//                               <a href="#" className="follow-btn">
//                                 Follow <i className="icofont-arrow-right" />
//                               </a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>
//                               <div className="d-flex align-items-center">
//                                 <div className="img">
//                                   <img
//                                     src="../../../assets/img/avatar/f3.png"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="name">Tonette Baumgarten</div>
//                               </div>
//                             </td>
//                             <td>Russia</td>
//                             <td>
//                               <a href="#" className="follow-btn">
//                                 Follow <i className="icofont-arrow-right" />
//                               </a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>
//                               <div className="d-flex align-items-center">
//                                 <div className="img">
//                                   <img
//                                     src="../../../assets/img/avatar/f4.png"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="name">Luella Brumit</div>
//                               </div>
//                             </td>
//                             <td>Spain</td>
//                             <td>
//                               <a href="#" className="follow-btn">
//                                 Follow <i className="icofont-arrow-right" />
//                               </a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>
//                               <div className="d-flex align-items-center">
//                                 <div className="img">
//                                   <img
//                                     src="../../../assets/img/avatar/f5.png"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="name">Dionne Rosser</div>
//                               </div>
//                             </td>
//                             <td>Brazil</td>
//                             <td>
//                               <a href="#" className="follow-btn">
//                                 Follow <i className="icofont-arrow-right" />
//                               </a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>
//                               <div className="d-flex align-items-center">
//                                 <div className="img">
//                                   <img
//                                     src="../../../assets/img/avatar/f2.png"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="name">Kizzy Savoy</div>
//                               </div>
//                             </td>
//                             <td>China</td>
//                             <td>
//                               <a href="#" className="follow-btn">
//                                 Follow <i className="icofont-arrow-right" />
//                               </a>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>
//                               <div className="d-flex align-items-center">
//                                 <div className="img">
//                                   <img
//                                     src="../../../assets/img/avatar/f6.png"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="name">Earl Penton</div>
//                               </div>
//                             </td>
//                             <td>France</td>
//                             <td>
//                               <a href="#" className="follow-btn">
//                                 Follow <i className="icofont-arrow-right" />
//                               </a>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                     {/* End Table Responsive */}
//                   </div>
//                   {/* End Card */}
//                   {/* Notifications */}
//                   <div className="card notifications mb-30 mb-xl-0">
//                     <div className="card-body">
//                       <h5 className="mb-4">notifications</h5>
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single border-bottom d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="time">2 min ago</span>
//                           <p>
//                             Donec dapibus mauris id odio ornare tempus. Duis sit
//                             amet accumsan justo.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single border-bottom d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="time">2 min ago</span>
//                           <p>
//                             Donec dapibus mauris id odio ornare tempus. Duis sit
//                             amet accumsan justo.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single border-bottom d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="time">2 min ago</span>
//                           <p>
//                             Donec dapibus mauris id odio ornare tempus. Duis sit
//                             amet accumsan justo.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single border-bottom d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="time">2 min ago</span>
//                           <p>
//                             Donec dapibus mauris id odio ornare tempus. Duis sit
//                             amet accumsan justo.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single border-bottom d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="time">2 min ago</span>
//                           <p>
//                             Donec dapibus mauris id odio ornare tempus. Duis sit
//                             amet accumsan justo.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single border-bottom d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="time">2 min ago</span>
//                           <p>
//                             Donec dapibus mauris id odio ornare tempus. Duis sit
//                             amet accumsan justo.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                       {/* Item Single */}
//                       <a
//                         href="#"
//                         className="item-single d-flex align-items-center"
//                       >
//                         <div className="content">
//                           <span className="time">2 min ago</span>
//                           <p>
//                             Donec dapibus mauris id odio ornare tempus. Duis sit
//                             amet accumsan justo.
//                           </p>
//                         </div>
//                       </a>
//                       {/* End Item Single */}
//                     </div>
//                   </div>
//                   {/* End Notifications */}
//                 </div>
//                 <div className="col-xl-4 col-md-6">
//                   {/* Card */}
//                   <div className="card mb-30">
//                     <div className="card-body">
//                       <div className="row align-items-end">
//                         <div className="col-5 col-sm-6 col-lg-5">
//                           <div id="apex_column2-chart" className="chart" />
//                         </div>
//                         <div className="col-7 col-sm-6 col-lg-7">
//                           <div className="">
//                             <h4 className="mb-2">Registration</h4>
//                             <p>
//                               Pellentesque tincidunt tristique neque, eget
//                               venenatis enim gravida.
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* End Card */}
//                   {/* Card */}
//                   <div className="card todo-list mb-30">
//                     {/* Start Todo Single */}
//                     <div className="card-body">
//                       <h4 className="font-20 pb-3">Tasks</h4>
//                       <p>Saturday, 12 October 2019</p>
//                     </div>
//                     {/* End Todo Single */}
//                     {/* Start Todo Single */}
//                     <div className="single-row level-urgent border-bottom pt-3 pb-3">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="d-flex position-relative">
//                           {/* Custom Checkbox */}
//                           <label className="custom-checkbox">
//                             <input type="checkbox" />
//                             <span className="checkmark" />
//                           </label>
//                           {/* End Custom Checkbox */}
//                           {/* Todo Text */}
//                           <a
//                             href="../../apps/todolist/task-details.html"
//                             className="todo-text"
//                           >
//                             <p className="card-text mb-1">
//                               For detracty charmed add talking age. Shy
//                               resolution instrument unreserved man few.
//                             </p>
//                             <p className="label-text font-12 mb-0">Urgent</p>
//                           </a>
//                           {/* End Todo Text */}
//                         </div>
//                         <div className="d-flex">
//                           {/* Assign To */}
//                           <div className="assign_to">
//                             <img
//                               src="../../../assets/img/svg/Info.svg"
//                               alt=""
//                               className="svg mb-2"
//                             />
//                             <div className="assign-content">
//                               <div className="font-12 text-warning">
//                                 Back-End
//                               </div>
//                               <img
//                                 src="../../../assets/img/avatar/info-avatar.png"
//                                 alt=""
//                                 className="assign-avatar"
//                               />
//                             </div>
//                           </div>
//                           {/* End Assign To */}
//                           {/* Dropdown Button */}
//                           <div className="dropdown-button">
//                             <a
//                               href="#"
//                               className="d-flex align-items-center"
//                               data-toggle="dropdown"
//                             >
//                               <div className="menu-icon style--two w-14 mr-0">
//                                 <span />
//                                 <span />
//                                 <span />
//                               </div>
//                             </a>
//                             <div className="dropdown-menu">
//                               <a href="#">Edit</a>
//                               <a href="#">Sort By</a>
//                               <a href="#">Settings</a>
//                               <a href="#">Delete</a>
//                             </div>
//                           </div>
//                           {/* End Dropdown Button */}
//                         </div>
//                       </div>
//                     </div>
//                     {/* End Todo Single */}
//                     {/* Start Todo Single */}
//                     <div className="single-row level-important border-bottom pt-3 pb-3">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="d-flex position-relative">
//                           {/* Custom Checkbox */}
//                           <label className="custom-checkbox">
//                             <input type="checkbox" />
//                             <span className="checkmark" />
//                           </label>
//                           {/* End Custom Checkbox */}
//                           {/* Todo Text */}
//                           <a
//                             href="../../apps/todolist/task-details.html"
//                             className="todo-text pr-2 pr-md-4"
//                           >
//                             <p className="card-text mb-1">
//                               Way sentiments two indulgence uncommonly own.
//                             </p>
//                             <p className="label-text font-12 mb-0">Important</p>
//                           </a>
//                           {/* End Todo Text */}
//                         </div>
//                         <div className="d-flex">
//                           {/* Assign To */}
//                           <div className="assign_to">
//                             <img
//                               src="../../../assets/img/svg/Info.svg"
//                               alt=""
//                               className="svg mb-2"
//                             />
//                             <div className="assign-content">
//                               <div className="font-12 text-warning">
//                                 Back-End
//                               </div>
//                               <img
//                                 src="../../../assets/img/avatar/info-avatar.png"
//                                 alt=""
//                                 className="assign-avatar"
//                               />
//                             </div>
//                           </div>
//                           {/* End Assign To */}
//                           {/* Dropdown Button */}
//                           <div className="dropdown-button">
//                             <a
//                               href="#"
//                               className="d-flex align-items-center"
//                               data-toggle="dropdown"
//                             >
//                               <div className="menu-icon style--two w-14 mr-0">
//                                 <span />
//                                 <span />
//                                 <span />
//                               </div>
//                             </a>
//                             <div className="dropdown-menu">
//                               <a href="#">Edit</a>
//                               <a href="#">Sort By</a>
//                               <a href="#">Settings</a>
//                               <a href="#">Delete</a>
//                             </div>
//                           </div>
//                           {/* End Dropdown Button */}
//                         </div>
//                       </div>
//                     </div>
//                     {/* End Todo Single */}
//                     {/* Start Todo Single */}
//                     <div className="single-row level-important border-bottom pt-3 pb-3">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="d-flex position-relative">
//                           {/* Custom Checkbox */}
//                           <label className="custom-checkbox">
//                             <input type="checkbox" defaultChecked="" />
//                             <span className="checkmark" />
//                           </label>
//                           {/* End Custom Checkbox */}
//                           {/* Todo Text */}
//                           <a
//                             href="../../apps/todolist/task-details.html"
//                             className="todo-text line-through pr-2 pr-md-4"
//                           >
//                             <p className="card-text mb-1">
//                               Whose her enjoy chief new young. Felicity if ye
//                               required likewise so doubtful. On so attention
//                               necessary at by provision otherwise existence{" "}
//                             </p>
//                             <p className="label-text font-12 mb-0">Important</p>
//                           </a>
//                           {/* End Todo Text */}
//                         </div>
//                         <div className="d-flex">
//                           {/* Assign To */}
//                           <div className="assign_to">
//                             <img
//                               src="../../../assets/img/svg/Info.svg"
//                               alt=""
//                               className="svg mb-2"
//                             />
//                             <div className="assign-content">
//                               <div className="font-12 text-warning">
//                                 Back-End
//                               </div>
//                               <img
//                                 src="../../../assets/img/avatar/info-avatar.png"
//                                 alt=""
//                                 className="assign-avatar"
//                               />
//                             </div>
//                           </div>
//                           {/* End Assign To */}
//                           {/* Dropdown Button */}
//                           <div className="dropdown-button">
//                             <a
//                               href="#"
//                               className="d-flex align-items-center"
//                               data-toggle="dropdown"
//                             >
//                               <div className="menu-icon style--two w-14 mr-0">
//                                 <span />
//                                 <span />
//                                 <span />
//                               </div>
//                             </a>
//                             <div className="dropdown-menu">
//                               <a href="#">Edit</a>
//                               <a href="#">Sort By</a>
//                               <a href="#">Settings</a>
//                               <a href="#">Delete</a>
//                             </div>
//                           </div>
//                           {/* End Dropdown Button */}
//                         </div>
//                       </div>
//                     </div>
//                     {/* End Todo Single */}
//                     {/* Start Todo Single */}
//                     <div className="single-row level-not_important pt-3 pb-3">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="d-flex position-relative">
//                           {/* Custom Checkbox */}
//                           <label className="custom-checkbox">
//                             <input type="checkbox" defaultChecked="" />
//                             <span className="checkmark" />
//                           </label>
//                           {/* End Custom Checkbox */}
//                           {/* Start Todo Text */}
//                           <a
//                             href="../../apps/todolist/task-details.html"
//                             className="todo-text line-through pr-2 pr-md-4"
//                           >
//                             <p className="card-text mb-1">
//                               Unpleasing up announcing unpleasant themselves oh
//                               do on. Way advantage age led listening
//                             </p>
//                             <p className="label-text font-12 mb-0">
//                               Not Important
//                             </p>
//                           </a>
//                           {/* End Todo Text */}
//                         </div>
//                         <div className="d-flex">
//                           {/* Assign To */}
//                           <div className="assign_to">
//                             <img
//                               src="../../../assets/img/svg/Info.svg"
//                               alt=""
//                               className="svg mb-2"
//                             />
//                             <div className="assign-content">
//                               <div className="font-12 text-warning">
//                                 Back-End
//                               </div>
//                               <img
//                                 src="../../../assets/img/avatar/info-avatar.png"
//                                 alt=""
//                                 className="assign-avatar"
//                               />
//                             </div>
//                           </div>
//                           {/* End Assign To */}
//                           {/* Dropdown Button */}
//                           <div className="dropdown-button">
//                             <a
//                               href="#"
//                               className="d-flex align-items-center"
//                               data-toggle="dropdown"
//                             >
//                               <div className="menu-icon style--two w-14 mr-0">
//                                 <span />
//                                 <span />
//                                 <span />
//                               </div>
//                             </a>
//                             <div className="dropdown-menu">
//                               <a href="#">Edit</a>
//                               <a href="#">Sort By</a>
//                               <a href="#">Settings</a>
//                               <a href="#">Delete</a>
//                             </div>
//                           </div>
//                           {/* End Dropdown Button */}
//                         </div>
//                       </div>
//                     </div>
//                     {/* End Todo Single */}
//                   </div>
//                   {/* End Card */}
//                   {/* Card */}
//                   <div className="card mb-30">
//                     <div className="card-body">
//                       <div className="row align-items-end">
//                         <div className="col-6">
//                           <div className="d-flex justify-content-start">
//                             <div className="ProgressBar-wrap2 position-relative">
//                               <div
//                                 className="ProgressBar ProgressBar_4"
//                                 data-progress={67}
//                               >
//                                 <svg
//                                   className="ProgressBar-contentCircle"
//                                   viewBox="0 0 200 200"
//                                 >
//                                   {/* on défini le l'angle et le centre de rotation du cercle */}
//                                   <circle
//                                     transform="rotate(-90, 100, 100)"
//                                     className="ProgressBar-background"
//                                     cx={100}
//                                     cy={100}
//                                     r={85}
//                                   />
//                                   <circle
//                                     transform="rotate(-90, 100, 100)"
//                                     className="ProgressBar-circle"
//                                     cx={100}
//                                     cy={100}
//                                     r={85}
//                                   />
//                                 </svg>
//                                 <span className="ProgressBar-percentage ProgressBar-percentage--count" />
//                                 <span className="ProgressBar-percentage--text">
//                                   Bounce Rate
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-6">
//                           <div className="d-flex justify-content-start progress_5">
//                             <div className="ProgressBar-wrap2 position-relative">
//                               <div
//                                 className="ProgressBar ProgressBar_5"
//                                 data-progress={48}
//                               >
//                                 <svg
//                                   className="ProgressBar-contentCircle"
//                                   viewBox="0 0 200 200"
//                                 >
//                                   {/* on défini le l'angle et le centre de rotation du cercle */}
//                                   <circle
//                                     transform="rotate(-90, 100, 100)"
//                                     className="ProgressBar-background"
//                                     cx={100}
//                                     cy={100}
//                                     r={85}
//                                   />
//                                   <circle
//                                     transform="rotate(-90, 100, 100)"
//                                     className="ProgressBar-circle"
//                                     cx={100}
//                                     cy={100}
//                                     r={85}
//                                   />
//                                 </svg>
//                                 <span className="ProgressBar-percentage ProgressBar-percentage--count style--two" />
//                                 <span className="ProgressBar-percentage--text">
//                                   Conversion
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* End Card */}
//                   {/* Card */}
//                   <div className="card mb-30 progress_20">
//                     <div className="card-body">
//                       <div className="d-flex justify-content-between pb-2 mb-4">
//                         <div className="progress-title">
//                           <h4 className="mb-1">Performances</h4>
//                           <p className="font-14">
//                             Tell use paid law ever yet new. Meant to learn of
//                             vexed he there increased.
//                           </p>
//                         </div>
//                         <div className="dropdown-button">
//                           <a
//                             href="#"
//                             className="d-flex align-items-center"
//                             data-toggle="dropdown"
//                           >
//                             <div className="menu-icon style--two mr-0">
//                               <span />
//                               <span />
//                               <span />
//                             </div>
//                           </a>
//                           <div className="dropdown-menu">
//                             <a href="#">Daily</a>
//                             <a href="#">Sort By</a>
//                             <a href="#">Monthly</a>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="ProgressBar-wrap position-relative mb-3">
//                         <div
//                           className="ProgressBar ProgressBar_20"
//                           data-progress={70}
//                         >
//                           <svg
//                             className="ProgressBar-contentCircle"
//                             viewBox="0 0 200 200"
//                           >
//                             {/* on défini le l'angle et le centre de rotation du cercle */}
//                             <circle
//                               transform="rotate(135, 100, 100)"
//                               className="ProgressBar-background"
//                               cx={100}
//                               cy={100}
//                               r={8}
//                             />
//                             <circle
//                               transform="rotate(135, 100, 100)"
//                               className="ProgressBar-circle"
//                               cx={100}
//                               cy={100}
//                               r={85}
//                             />
//                           </svg>
//                           <span className="ProgressBar-percentage--text">
//                             Increase
//                           </span>
//                           <span className="ProgressBar-percentage ProgressBar-percentage--count" />
//                         </div>
//                       </div>
//                       <div className="country-performance px-2 pt-3 pb-2">
//                         <div className="process-bar-wrapper">
//                           <span className="process-name">Project Success</span>
//                           <span className="process-width">35%</span>
//                           <span
//                             className="process-bar"
//                             data-process-width={35}
//                           />
//                         </div>
//                         <div className="process-bar-wrapper style--two">
//                           <span className="process-name">Targeted Order</span>
//                           <span className="process-width">68%</span>
//                           <span
//                             className="process-bar"
//                             data-process-width={68}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* End Card */}
//                   {/* Today's Event */}
//                   <div className="todays-evnet mb-30 mb-xl-0">
//                     <div className="bg-c2-light profile-widget-header">
//                       <h4 className="d-flex align-items-center">
//                         <img
//                           src="../../../assets/img/svg/calender-color.svg"
//                           alt=""
//                           className="svg ml-3"
//                         />
//                         Today's Events
//                       </h4>
//                     </div>
//                     <div className="card">
//                       <ul className="list-unstyled">
//                         <li className="border-bottom">
//                           <h5>Ligula rhoncus euismod pretium</h5>
//                           <div className="event-meta font-14 d-flex align-items-center">
//                             <img
//                               src="../../../assets/img/svg/watch2.svg"
//                               alt=""
//                               className="svg"
//                             />
//                             <span className="time d-inline-block mr-2">
//                               7.20pm
//                             </span>
//                             <span className="date d-inline-block mr-2">
//                               12 October 2019
//                             </span>
//                           </div>
//                           <p className="mt-2">
//                             Duis porta, ligula rhoncus euismod pretium, nisi
//                             tellus eleifend odio, luctus viverra sem dolor id
//                             sem. Maecenas a venenatis enim, quis porttitor
//                             magna.
//                           </p>
//                         </li>
//                         <li className="border-bottom">
//                           <h5>
//                             Phasellus finibus enim nulla, quis ornare odio
//                             facilisiseu
//                           </h5>
//                           <div className="event-meta font-14 d-flex align-items-center">
//                             <img
//                               src="../../../assets/img/svg/watch2.svg"
//                               alt=""
//                               className="svg"
//                             />
//                             <span className="time d-inline-block mr-2">
//                               7.20pm
//                             </span>
//                             <span className="date d-inline-block mr-2">
//                               12 October 2019
//                             </span>
//                           </div>
//                         </li>
//                         <li className="border-bottom">
//                           <h5>Aenean sed nibh a magna posuere tempor.</h5>
//                           <div className="event-meta font-14 d-flex align-items-center">
//                             <img
//                               src="../../../assets/img/svg/watch2.svg"
//                               alt=""
//                               className="svg"
//                             />
//                             <span className="time d-inline-block mr-2">
//                               7.20pm
//                             </span>
//                             <span className="date d-inline-block mr-2">
//                               12 October 2019
//                             </span>
//                           </div>
//                         </li>
//                         <li>
//                           <h5>
//                             Aenean sed lorem ested quis neque ut nibh suscipit
//                             imperdiet
//                           </h5>
//                           <div className="event-meta font-14 d-flex align-items-center">
//                             <img
//                               src="../../../assets/img/svg/watch2.svg"
//                               alt=""
//                               className="svg"
//                             />
//                             <span className="time d-inline-block mr-2">
//                               7.20pm
//                             </span>
//                             <span className="date d-inline-block mr-2">
//                               12 October 2019
//                             </span>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   {/* End Today's Event */}
//                 </div>
//                 <div className="col-xl-4 col-md-12">
//                   <div className="row">
//                     <div className="col-xl-12 col-md-7">
//                       {/* Timeline Wrap */}
//                       <div className="timeline-wrap mb-30">
//                         <div className="card pb-2">
//                           <div className="card-body">
//                             <h4 className="mb-3">Timeline</h4>
//                             <p className="black">
//                               Vestibulum blandit viverra convallis. Pellentesque
//                               ligula fermentum ut semper in, tincidunt nec dui.
//                             </p>
//                           </div>
//                         </div>
//                         <ul className="timeline style--two">
//                           <li className="event" data-date="12 October 2019">
//                             <span>1:08 AM</span>
//                             <h4>
//                               Vitae eius reiciendis voluptatum non non ut
//                               temporibus voluptatum enim.
//                             </h4>
//                             <p>
//                               Aenean sed lorem est. Sed quis neque ut nibh
//                               suscipit imperdiet ac non augue. Aenean ornare sit
//                               amet lectus non tristique. Nunc ut volutpat
//                               lectus. Nulla velit augue, pulvinar sed nisi sit
//                               amet, eleifend fermentum est.
//                             </p>
//                           </li>
//                           <li className="event">
//                             <span>8:00 PM</span>
//                             <h4>Est accusamus rerum molestias.</h4>
//                             <p>
//                               Aenean sed lorem est. Sed quis neque ut nibh
//                               suscipit imperdiet ac non augue. Aenean ornare sit
//                               amet lectus non tristique. Nunc ut volutpat
//                               lectus. Nulla velit augue, pulvinar sed nisi sit
//                               amet, eleifend fermentum est.
//                             </p>
//                           </li>
//                           <li className="event" data-date="13 October 2019">
//                             <span>2:50 PM</span>
//                             <h4>
//                               Quam aut exercitationem adipisci eaque quibusdam
//                               autem dolores nam.
//                             </h4>
//                             <p>
//                               Aenean sed lorem est. Sed quis neque ut nibh
//                               suscipit imperdiet ac non augue. Aenean ornare sit
//                               amet lectus non tristique. Nunc ut volutpat
//                               lectus. Nulla velit augue, pulvinar sed nisi sit
//                               amet, eleifend fermentum est.
//                             </p>
//                           </li>
//                           <li className="event" data-date="14 October 2019">
//                             <span>1:06 PM</span>
//                             <h4>
//                               Mollitia assumenda aut sit vel consectetur labore
//                               eos debitis.
//                             </h4>
//                             <p>
//                               Aenean sed lorem est. Sed quis neque ut nibh
//                               suscipit imperdiet ac non augue. Aenean ornare sit
//                               amet lectus non tristique. Nunc ut volutpat
//                               lectus. Nulla velit augue, pulvinar sed nisi sit
//                               amet, eleifend fermentum est.
//                             </p>
//                           </li>
//                           <li className="event" data-date="">
//                             <span>11:21 PM</span>
//                             <h4>
//                               Voluptas voluptas aut magnam maiores fuga
//                               veritatis est nam.
//                             </h4>
//                             <p>
//                               Aenean sed lorem est. Sed quis neque ut nibh
//                               suscipit imperdiet ac non augue. Aenean ornare sit
//                               amet lectus non tristique. Nunc ut volutpat
//                               lectus. Nulla velit augue, pulvinar sed nisi sit
//                               amet, eleifend fermentum est.
//                             </p>
//                           </li>
//                           <li className="event" data-date="15 October 2019">
//                             <span>7:10 PM</span>
//                             <h4>
//                               Provident omnis nobis distinctio deserunt dolor
//                               excepturi enim.
//                             </h4>
//                             <p>
//                               Aenean sed lorem est. Sed quis neque ut nibh
//                               suscipit imperdiet ac non augue. Aenean ornare sit
//                               amet lectus non tristique. Nunc ut volutpat
//                               lectus. Nulla velit augue, pulvinar sed nisi sit
//                               amet, eleifend fermentum est.
//                             </p>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* End Timeline Wrap */}
//                     </div>
//                     <div className="col-xl-12 col-md-5">
//                       {/* Card */}
//                       <div className="card">
//                         <div className="card-body">
//                           <div className="d-flex justify-content-between mb-20">
//                             <div className="">
//                               <h4 className="mb-1">Transaction History</h4>
//                             </div>
//                             <div className="dropdown-button">
//                               <a
//                                 href="#"
//                                 className="d-flex align-items-center"
//                                 data-toggle="dropdown"
//                               >
//                                 <div className="menu-icon style--two mr-0">
//                                   <span />
//                                   <span />
//                                   <span />
//                                 </div>
//                               </a>
//                               <div className="dropdown-menu">
//                                 <a href="#">Daily</a>
//                                 <a href="#">Sort By</a>
//                                 <a href="#">Monthly</a>
//                               </div>
//                             </div>
//                           </div>
//                           {/* Transaction History */}
//                           <div className="trans-history">
//                             {/* Transaction History Item */}
//                             <div className="border-bottom mb-20 pb-20 d-flex justify-content-between align-items-center">
//                               <div className="d-flex align-items-center">
//                                 <div className="img ml-3">
//                                   <img
//                                     src="../../../assets/img/png-icon/th1.png"
//                                     className="img-40"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="content">
//                                   <h4>Clothings</h4>
//                                   <span className="font-12">Food Category</span>
//                                 </div>
//                               </div>
//                               <div className="">
//                                 <h4>$2654</h4>
//                                 <span className="font-12">USD</span>
//                               </div>
//                             </div>
//                             {/* End Transaction History Item */}
//                             {/* Transaction History Item */}
//                             <div className="border-bottom mb-20 pb-20 d-flex justify-content-between align-items-center">
//                               <div className="d-flex align-items-center">
//                                 <div className="img ml-3">
//                                   <img
//                                     src="../../../assets/img/png-icon/th2.png"
//                                     className="img-40"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="content">
//                                   <h4>Company</h4>
//                                   <span className="font-12">Food Category</span>
//                                 </div>
//                               </div>
//                               <div className="">
//                                 <h4>$2654</h4>
//                                 <span className="font-12">USD</span>
//                               </div>
//                             </div>
//                             {/* End Transaction History Item */}
//                             {/* Transaction History Item */}
//                             <div className="border-bottom mb-20 pb-20 d-flex justify-content-between align-items-center">
//                               <div className="d-flex align-items-center">
//                                 <div className="img ml-3">
//                                   <img
//                                     src="../../../assets/img/png-icon/th3.png"
//                                     className="img-40"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="content">
//                                   <h4>Super Shop</h4>
//                                   <span className="font-12">Food Category</span>
//                                 </div>
//                               </div>
//                               <div className="">
//                                 <h4>$2654</h4>
//                                 <span className="font-12">USD</span>
//                               </div>
//                             </div>
//                             {/* End Transaction History Item */}
//                             {/* Transaction History Item */}
//                             <div className="border-bottom mb-20 pb-20 d-flex justify-content-between align-items-center">
//                               <div className="d-flex align-items-center">
//                                 <div className="img ml-3">
//                                   <img
//                                     src="../../../assets/img/png-icon/th5.png"
//                                     className="img-40"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="content">
//                                   <h4>KD co.</h4>
//                                   <span className="font-12">Food Category</span>
//                                 </div>
//                               </div>
//                               <div className="">
//                                 <h4>$2654</h4>
//                                 <span className="font-12">USD</span>
//                               </div>
//                             </div>
//                             {/* End Transaction History Item */}
//                             {/* Transaction History Item */}
//                             <div className="border-bottom mb-20 pb-20 d-flex justify-content-between align-items-center">
//                               <div className="d-flex align-items-center">
//                                 <div className="img ml-3">
//                                   <img
//                                     src="../../../assets/img/png-icon/th6.png"
//                                     className="img-40"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="content">
//                                   <h4>Kids Shop</h4>
//                                   <span className="font-12">Food Category</span>
//                                 </div>
//                               </div>
//                               <div className="">
//                                 <h4>$2654</h4>
//                                 <span className="font-12">USD</span>
//                               </div>
//                             </div>
//                             {/* End Transaction History Item */}
//                             {/* Transaction History Item */}
//                             <div className="d-flex justify-content-between align-items-center">
//                               <div className="d-flex align-items-center">
//                                 <div className="img ml-3">
//                                   <img
//                                     src="../../../assets/img/png-icon/th4.png"
//                                     className="img-40"
//                                     alt=""
//                                   />
//                                 </div>
//                                 <div className="content">
//                                   <h4>Food</h4>
//                                   <span className="font-12">Food Category</span>
//                                 </div>
//                               </div>
//                               <div className="">
//                                 <h4>$2654</h4>
//                                 <span className="font-12">USD</span>
//                               </div>
//                             </div>
//                             {/* End Transaction History Item */}
//                           </div>
//                           {/* End Transaction History */}
//                         </div>
//                       </div>
//                       {/* End Card */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* End Main Content */}
//       </div>
//       {/* End Main Wrapper */}
//       {/* Footer */}
//       <footer className="footer">
//         Dashmin © 2020 created by{" "}
//         <a href="https://www.themelooks.com/"> ThemeLooks</a>
//       </footer>
//       {/* End Footer */}
//     </div>
//     {/* End wrapper */}
//     {/* ======= BEGIN GLOBAL MANDATORY SCRIPTS ======= */}
//     {/* ======= BEGIN GLOBAL MANDATORY SCRIPTS ======= */}
//     {/* ======= BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS ======= */}
//     {/* ======= End BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS ======= */}
//   </>;
// }

// export default Profile;
