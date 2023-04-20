import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Sample from "../components/Sample/Sample.vue";
import AddSample from "../components/Sample/AddSample.vue";
import SampleEdit from "../components/Sample/SampleEdit.vue";
import SampleDetails from "../components/Sample/SampleDetails.vue";
import Order from "../components/Orders/Order.vue";
import AddOrder from "../components/Orders/AddOrder.vue";
import OrderDetail from "../components/Orders/OrderDetail.vue";
import Receipts from "../components/Receipts/Receipts.vue";
import AddInvoice from "../components/Receipts/AddInvoice.vue";
import Delivery from "../components/Delivery/Delivery.vue";
import Dispatch from "../components/Delivery/Dispatch.vue";
import Notification from "../components/Notification/Notification.vue";
import Login from "../components/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/Sample",
      name: "Sample",
      component: Sample,
    },
    {
      path: "/AddSample",
      name: "AddSample",
      component: AddSample,
    },
    {
      path: "/SampleEdit",
      name: "SampleEdit",
      component: SampleEdit,
    },
    {
      path: "/SampleDetails",
      name: "SampleDetails",
      component: SampleDetails,
    },
    {
      path: "/Order",
      name: "Order",
      component: Order,
    },
    {
      path: "/AddOrder",
      name: "AddOrder",
      component: AddOrder,
    },
    {
      path: "/OrderDetail",
      name: "OrderDetail",
      component: OrderDetail,
    },
    {
      path: "/Receipts",
      name: "Receipts",
      component: Receipts,
    },
    {
      path: "/AddInvoice",
      name: "AddInvoice",
      component: AddInvoice,
    },
    {
      path: "/Delivery",
      name: "Delivery",
      component: Delivery,
    },
    {
      path: "/Dispatch",
      name: "Dispatch",
      component: Dispatch,
    },
    {
      path: "/Notification",
      name: "Notification",
      component: Notification,
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    
  ],
});

export default router;
