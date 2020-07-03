import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu Sider Basic</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Roxket Lab</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return routes.map((routes, index) => (
    <Route
      key={index}
      path={routes.path}
      exact={routes.exact}
      component={routes.component}
    />
  ));
}
