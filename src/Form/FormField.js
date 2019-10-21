import React from "react";
import "./FormField.css";
import { Form, Input, Button, DatePicker } from "antd";
import Users from "../Users";
import uuidv1 from "uuid/v1";
import moment from "moment";

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.userArray = [];
  }
  state = {
    user: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      values.id = uuidv1();
      values.dob = moment(values.birthday._d).format("YYYY-MM-DD");
      this.userArray.push(values);
      if (!err) {
        this.setState({
          user: this.userArray
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    return (
      <div className="wrapper">
        <div className="form-div">
          <Form onSubmit={this.handleSubmit} className="login-form">
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
          <Users data={this.state} />
        </div>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: "normal_login" })(FormField);

export default LoginForm;
