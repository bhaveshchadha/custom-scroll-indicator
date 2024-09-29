import React from "react";
import ProgressIndicator from "../components/ProgressIndicator";

function NavBar() {
  return (
    <div className="sticky top-0 z-50 ">
      <div className="navbar bg-green-800 text-white ">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <div className="text-2xl font-bold">Custom Scroll Hundred</div>
        </div>
        <div className="navbar-end"></div>
      </div>

      <ProgressIndicator />
    </div>
  );
}

export default NavBar;
