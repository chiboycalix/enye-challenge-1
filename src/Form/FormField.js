import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/user/actions";
import "./FormField.css";
import { Form, Input, Button, DatePicker } from "antd";
import Users from "../Users";
import uuidv1 from "uuid/v1";
import moment from "moment";

const FormField = props => {
  const users = useSelector(state => state);
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    props.form.validateFields((error, values) => {
      values.id = uuidv1();
      values.dob = moment(values.birthday._d).format("YYYY-MM-DD");
      if (!error) {
        dispatch(addUser(values));
      }
    });
  };
  const { getFieldDecorator } = props.form;
  const config = {
    rules: [{ type: "object", required: true, message: "Please select time!" }]
  };
  return (
    <div className="wrapper">
      <div className="form-div">
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("firstname", {
              rules: [
                { required: true, message: "Please input your firstname!" }
              ]
            })(<Input placeholder="Firstname" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("lastname", {
              rules: [
                { required: true, message: "Please input your lastname!" }
              ]
            })(<Input placeholder="Lastname" />)}
          </Form.Item>
          <Form.Item label="Birthday">
            {getFieldDecorator("birthday", config)(<DatePicker />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("age", {
              rules: [{ required: true, message: "Please input your age!" }]
            })(<Input placeholder="Age" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("hobby", {
              rules: [{ required: true, message: "Please input your Hobby!" }]
            })(<Input placeholder="Hobby" />)}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="user-div">
        <h1>User Table</h1>
        <Users data={{ users }} />
      </div>
    </div>
  );
};

const LoginForm = Form.create({ name: "normal_login" })(FormField);

export default LoginForm;
