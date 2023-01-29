import Link from "next/link";
import React from "react";
import { HiOutlineUsers, HiSpeakerphone } from "react-icons/Hi";
import Admin from "../../../layouts/Admin";
import { FaUserShield } from "react-icons/Fa";
import { RiUserStarFill } from "react-icons/Ri";

const Dashboard = () => {
  return (
    <Admin>
      <div className="container">
        <Link href="">
          <a className="dashboard-item">
            <p>Total Admins</p>
            <div className="details-icon">
              <h2>2</h2>
              <FaUserShield className="i" />
            </div>
          </a>
        </Link>
        <Link href="">
          <a className="dashboard-item">
            <p>Total Users</p>
            <div className="details-icon">
              <h2>25</h2>
              <HiOutlineUsers className="i" />
            </div>
          </a>
        </Link>
        <Link href="">
          <a className="dashboard-item">
            <p>Verified Users</p>
            <div className="details-icon">
              <h2>4</h2>
              <RiUserStarFill className="i" />
            </div>
          </a>
        </Link>
        <Link href="">
          <a className="dashboard-item">
            <p>Total Posts</p>
            <div className="details-icon">
              <h2>25</h2>
              <HiSpeakerphone className="i" />
            </div>
          </a>
        </Link>
        <Link href="">
          <a className="dashboard-item">
            <p>Verified Posts</p>
            <div className="details-icon">
              <h2>23</h2>
              <HiSpeakerphone className="i" />
            </div>
          </a>
        </Link>
      </div>
      <div className="admin-form-container">
        <p>Add new user</p>
        <div className="input-container">
          <div className="input">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>Title</label>
            <input type="text" />
          </div>
        </div>
        <div className="button-container">
          <button>Button</button>
        </div>
      </div>

      <div className="A-table-container">
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
    </Admin>
  );
};

export default Dashboard;
