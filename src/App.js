import MainContent from "./componants/Main-Content/MainContent";
import SideBar from "./componants/Side-Bar/SideBar";
import { useState } from "react";
import { FullScreen, useFullScreenHandle } from 'react-full-screen';


function App() {

  const[hide,setHide] = useState(false);

  const handle = useFullScreenHandle();

  const handleSidebarToggle = () => {
    console.log("handleSidebarToggle called");
    setHide(!hide);
  }

  return (
    <>
    <FullScreen handle={handle}>
      <div className="d-flex">
        <SideBar hide={hide}/>
        <div className="col">
          <MainContent handleSidebarToggle={handleSidebarToggle} handle={handle}/>
        </div>
      </div>
    </FullScreen>
    </>
  );
}

export default App;
