import React from "react";
import { Table } from "antd";
import "./Users.css";

function Users(props) {
  const { Column } = Table;
  return (
    <div>
      <Table dataSource={props.data && props.data.user} rowKey="id">
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
