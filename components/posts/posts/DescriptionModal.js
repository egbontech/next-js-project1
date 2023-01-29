import React, { useContext } from "react";
import { AiFillWarning } from "react-icons/ai";
import { MdClose} from "react-icons/Md";
import { ProductViewContext } from "../../../pages/posts/[product]";

const DescriptionModal = ({openModal}) => {

  const context = useContext(ProductViewContext)

    if(!openModal) return false

  return (
    <div>
      <div className="desc-modal-overlay"onClick={ () => context.setOpenDescModalContext(false)}>
        <div className="desc-container"onClick={(e) => e.stopPropagation()}>
            <button onClick={ () => context.setOpenDescModalContext(false)}className="button"><MdClose/></button>
          <div className="title">
            <h2>
              how to become a millionaire how to become a millionaire how to
              become a millionaire
            </h2>
          </div>
          <div className="desc-header">
            <p>Post Description</p>
          </div>
          <div className="post-description">
            <p>
              how to become a millionaire how to become a millionaire how to
              become a millionaire how to become a millionaire how to become a
              millionaire how to become a millionaire
            </p>
          </div>
          <div className="warning">
            <div className="warning-header">
              <AiFillWarning className="i" />
              <p>Warning!</p>
            </div>
            <p className="warning-text">
              how to become a millionaire how to become a millionaire how to
              become a millionaire how to become a millionaire how to become a
              millionaire how to become a millionaire
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionModal;
