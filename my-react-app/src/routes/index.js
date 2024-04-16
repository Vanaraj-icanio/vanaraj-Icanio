/**
 * (c) Raison All rights reserved.
 **/
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../modules/login.js";
import Dashboard from "../modules/Dashboard/intex.js";
export default function RootLayout() {
//   const [hideHeader, setHideHeader] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route
          path="/"
          element={hideHeader ? null : <Layout hideHeader={hideHeader} />}
        > */}
          <Route path="dashboard" element={<Dashboard />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}













// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import Login from './modules/login';
// import Dashboard from './modules/Dashboard/';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Route exact path="/">
//           <Redirect to="/login" />
//         </Route>
//         <Route path="/login" component={Login} />
//         <Route path="/dashboard" component={Dashboard} />
//       </div>
//     </Router>
//   );
// };

// export default App;
