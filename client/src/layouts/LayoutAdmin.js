import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu Sider Admin</h2>
      <Layout>
        <Header>Header</Header>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Roxket Lab</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  //const { routes } = props;
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
