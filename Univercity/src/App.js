import React, { Suspense } from "react";
const School = React.lazy(() => import("schoolApp/App"));
import College from "collegeApp/App";
// import School from "schoolApp/App";
import ErrorBoundary from "./ErrorBoundary";
//
const App = () => {
  return (
    <div style={{ border: "1px solid cyan", padding: "5px" }}>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          background: "cyan",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>Univercity</div>
        <nav>Home | About | Contact</nav>
      </div>
      <ErrorBoundary>
        <Suspense fallback="Loading college component...">
          <College />
        </Suspense>
        <Suspense fallback="Loading school component...">
          <School />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
