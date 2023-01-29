import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/Md";
import Link from "next/link";

const ManageAds = () => {
  return (
    <div className="main-content">
      <div className="profile-settings-container">
        <Link href="/profile">
          <a className="profile-setting">
            <div className="icon-title">
              <MdOutlineArrowBackIosNew />
              <p style={{ fontWeight: "bold" }}>Manage Ads</p>
            </div>
          </a>
        </Link>
        <div className="manage-ads">
          <h3>My Adverts</h3>
          <div className="table-container">
            <table className="content-table">
              <thead>
                <tr>
                  <th>testH</th>
                  <th>testH</th>
                  <th>testH</th>
                  <th>testH</th>
                  <th>testH</th>
                  <th>testH</th>
                  <th>testH</th>
                  <th>testH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                </tr>
                <tr>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                </tr>
                <tr>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                  <td>data1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="manage-ads-svg-container">
            <div className="svg">
            <img src="/assets/images/empty.svg" alt="profile-picture" />
            </div> 
            <p>There are no adverts yet.</p>   
            <Link  href="/create-new-ad">
            <a>
             Create new one now!
            </a>
              </Link>    
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAds;
