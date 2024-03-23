import {MAIN_ROUTE, PRODUCTS_DETAILS_ROUTE} from "./action";
import {Route, Switch} from "react-router";
import App from "../pages/App";
import Details from "../pages/Details";

const routes = [
    {
        id: MAIN_ROUTE,
        path: "/",
        exact: true,
        component: App
    },
    {
        id:PRODUCTS_DETAILS_ROUTE,
        path: "/:id",
        exact: true,
        component:Details
    }
]

export const getRouteConfig = id => {
    const route = routes.find(r => r.id === id)
    if (route) {
        const {component, ...rest} = route

        return rest

    }
}


const Routes = () => {
    return (
        <Switch>
            {
                routes.map(r => {
                    const {id, ...props} = r
                    return (
                        <Route id={id} {...props}/>
                    )
                })
            }
        </Switch>
    )
}

export default Routes
