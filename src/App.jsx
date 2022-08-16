import React, { useState } from "react";
import styles from "./App.scss";
// import Counter from "./components/Counter/Counter";
import EmployeeCard from "./components/Employee/Employee";

import team from "./data/team";

const App = () => {
  //   const getEmployeeCardJsx = (employee) => (
  //     <div key={employee.id}>
  //       <EmployeeCard employee={employee} />
  //     </div>
  //   );

  //   return (
  //     <div className={styles.app}>
  //       <h1 className={styles.header}>Ticket Tracker</h1>
  //       <section className={styles.team}>{team.map(getEmployeeCardJsx)}</section>
  //     </div>
  //   );
  // };

  // export default App;
  const mapsEmployee = team.map((employee) => {
    return <EmployeeCard employee={employee} />;
  });

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Ticket Tracker</h1>
      <section className={styles.team}>{mapsEmployee}</section>
    </div>
  );
};

export default App;
