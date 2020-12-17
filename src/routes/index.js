import React, { lazy, Suspense } from "react";
import BlankLayout from "../layouts/blankLayout";
import HomePage from '../pages/home/index';

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const routers = [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: HomePage,
        exact: true,
        routes: []
      }
    ]
  }
];

export default routers;