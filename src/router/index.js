import {
    MAIN_ROUTE,
    PRODUCTS_DETAILS_ROUTE,
    PRODUCTS_ORDER_ROUTE,
    PRODUCT_MY_ORDER
} from "./action";
import {Route, Switch} from "react-router-dom";
import App from "../pages/App";
import Details from "../pages/Details";
import OrderPage from "../pages/oreder";
import myOrder from "../pages/myOrder"

const routes = [
    {
        id: MAIN_ROUTE,
        path: "/",
        exact: true,
        component: App,
    },

    {
        id: PRODUCTS_DETAILS_ROUTE,
        path: "/:id",
        exact: true,
        component: Details,
    },
    {
        id: PRODUCTS_ORDER_ROUTE,
        exact: false,
        path: "/orderPage/order",
        component: OrderPage,

    },
    {
        id:PRODUCT_MY_ORDER,
        exact:false,
        path:"/orderPage/myOrder",
        component:myOrder
    }

];

export const getRouteConfig = (id) => {
    const route = routes.find((r) => r.id === id);
    if (route) {
        const {component, ...rest} = route;
        return rest;
    }
};

const Routess = () => {
    return (
        <Switch>
            {routes.map((r) => {
                const {id, ...props} = r;
                return <Route id={id} {...props} key={id} />;
            })}

        </Switch>
    );
};

export default Routess;
