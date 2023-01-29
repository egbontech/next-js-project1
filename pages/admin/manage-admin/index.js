import Link from "next/link";
import React from "react";
import Admin from "../../../layouts/Admin";

const Index = () => {
  return (
    <Admin>
      <div className="admin-link-button">
        <Link href="/admin/create-new-admin">
          <a>Create New Admin</a>
        </Link>
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

export default Index;
