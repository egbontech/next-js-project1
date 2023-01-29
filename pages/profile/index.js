import React, { useState ,createContext} from "react";
import ProfilePictureModal from "../../components/profile/mainContent/ProfilePictureModal";
import LeftSideBar from './../../components/homepage/LeftSidebar';
import MainContent from './../../components/profile/MainContent';
import FrontEnd from './../../layouts/FrontEnd';

export const AppContext = createContext();

const Profile = () => {
  const [openModalContext, setOpenModalContext] = useState(false);
  return (
    <AppContext.Provider value={{openModalContext,setOpenModalContext}}>
        <FrontEnd>
        <ProfilePictureModal
        openModal={openModalContext}
        closeModal={() => setOpenModalContext(false)}
        imageURL="/assets/images/women.png"
      />
        <div className="home-container">
          <LeftSideBar />
          <MainContent />
          <div className="right-sidebar"></div>
        </div>
      </FrontEnd>
    </AppContext.Provider>    
   
  );
};

export default Profile;
