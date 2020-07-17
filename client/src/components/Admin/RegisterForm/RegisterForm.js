import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserAddOutlined, LockOutlined } from "@ant-design/icons";
import {
  emailValidation,
  minLengthValidation,
} from "../../../utils/formValidation";
import { signUpApi } from "../../../api/user";
import "./RegisterForm.scss";

export default function RegisterForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  const changeForm = (event) => {
    if (event.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [event.target.name]: event.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [event.target.name]: event.target.value,
      });
    }
  };

  const inputValidation = (event) => {
    const { type, name } = event.target;
    if (type === "email") {
      setFormValid({
        ...formValid,
        [name]: emailValidation(event.target),
      });
    } else if (type === "password") {
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(event.target, 6),
      });
    } else if (type === "checkbox") {
      setFormValid({
        ...formValid,
        [name]: event.target.checked,
      });
    }
  };

  const register = async (event) => {
    event.preventDefault();
    //const { email, password, repeatPassword, privacyPolicy } = formValid;
    const emailVal = inputs.email;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;
    const privacyPolicyVal = inputs.privacyPolicy;

    if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
      notification.error({
        message: "Todos los campos son obligatorios",
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification.error({
          message: "Las contraseñas tienen que ser iguales.",
        });
      } else {
        const result = await signUpApi(inputs);
        if (!result.ok) {
          notification["error"]({
            message: result.message,
          });
        } else {
          notification["success"]({
            message: result.message,
          });
          resetForm();
        }
      }
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }

    setInputs({
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });

    setFormValid({
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  };

  return (
    <Form className="register-form" onChange={changeForm}>
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
          value={inputs.repeatPassword}
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
        <Button onClick={register} className="register-form__button">
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}
