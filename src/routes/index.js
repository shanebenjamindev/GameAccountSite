import { Route } from 'react-router-dom';
import { lazy } from 'react';

const routes = [
    {
        path: "",
        element: lazy(() => import("../components/DefaultComponent/DefaultComponent")),
        nested: [
            {
                path: "/",
                element: lazy(() => import("../pages/Home/Home")),
            },
            {
                path: "/user",
                element: lazy(() => import("../pages/User/User")),
            },
            {
                path: "/credit",
                element: lazy(() => import("../pages/CreditCard/CreditCard")),
            },
            {
                path: "/tutorial",
                element: lazy(() => import("../pages/Tutorial/Tutorial")),
            },
            {
                path: "/top",
                element: lazy(() => import("../pages/Top/Top")),
            },
            {
                path: "/detail/:id",
                element: lazy(() => import("../pages/DetailGame/Detail")),
            },
        ]
    },
]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((item) => {
                        return <Route key={item.path} path={item.path} element={< item.element />} />
                    })}
                </Route>
            )
        } else {
            return <Route key={route.path} path={route.path} element={< route.element />} />
        }
    })
}
export default renderRoutes;