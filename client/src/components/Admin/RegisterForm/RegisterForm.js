import React, { useState } from "react";
import "./RegisterForm.scss";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserAddOutlined, LockOutlined } from "@ant-design/icons";
import {
  emailValidation,
  minLengthValidation,
} from "../../../utils/formValidation";

export default function RegisterForm() {
  useState[(inputs, setInputs)] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const [formValid, setFormValid] = userState({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  const changeForm = (event) => {};

  const inputValidation = (event) => {
    const { type, name } = event.target;
    if (type === "email") {
      setFormValid({
        ...formValid,
        [name]: emailValidation(event.target),
      });
    }

    if (type === "password") {
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(event.target, 6),
      });
    }

    if (type === "checkbox") {
      setFormValid({
        ...formValid,
        [name]: event.target.checked,
      });
    }
  };
  const register = (event) => {
    event.preventDefault();
  };

  return (
    <Form className="register-form" onChange={changeForm} onSubmit={register}>
      <Form.Item>
        <Input
          prefix={<UserAddOutlined style={{ color: "rgba:(0,0,0,0.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba: (0,0,0,0.25" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba: (0,0,0,0.25" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={input.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          checked={inputs.privacyPolicy}
          onChange={inputValidation}
        >
          He leído y acepto las políticas de privacidad.
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="Submit" className="register-form__button">
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}
