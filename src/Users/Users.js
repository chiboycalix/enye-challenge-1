import React from "react";
import { Table } from "antd";
import "./Users.css";

function Users(props) {
  const { Column } = Table;
  return (
    <div>
      <Table dataSource={props.data && props.data.data} rowKey="uuid">
            <Column title="User Id" dataIndex="uuid" key="uuid" />
            <Column title="Firstname" dataIndex="firstname" key="firstname" />
            <Column title="Lastname" dataIndex="lastname" key="lastname" />
            <Column title="Birthday" dataIndex="dob" key="dob" />
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Hobby" dataIndex="hobby" key="hobby" />
      </Table>
    </div>
  );
}

export default Users;
