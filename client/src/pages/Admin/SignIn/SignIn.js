import React from "react";
import "./SignIn.scss";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/jpg/roxket_logo.png";
import RegisterForm from "../../../components/Admin/RegisterForm";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Roxket Lab"></img>
        </h1>

        <div className="sign-in__content-tabs">
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span>Entrar</span>} key="1">
              Component Login form
            </TabPane>
            <TabPane tab={<span>Nuevo usuario</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
