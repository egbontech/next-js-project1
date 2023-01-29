import MainContent from "../components/homepage/MainContent";
import RightSideBar from "../components/homepage/RightSidebar";
import FrontEnd from "../layouts/FrontEnd";
import LeftSideBar from './../components/homepage/LeftSidebar';

export default function Home() {
  return (
   <>
   <FrontEnd>       
    <div className="home-container">
     <LeftSideBar/>
     <MainContent/>
     <RightSideBar/>
    </div> 
    </FrontEnd>  
   </>
  )
}
