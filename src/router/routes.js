import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pharmacy",
    name: "pharmacy",
    redirect: "/pharmacy/pharmacy-list",
    children: [
      {
        path: "pharmacy-list",
        name: "pharmacy-list",
        component: () => import("@/views/Pharmacy/PharmacyList.vue"),
        children: [
          {
            path: "pharmacy-group/:id",
            name: "pharmacy-group",
            component: () => import("@/views/Pharmacy/PharmacyGroup.vue"),
          },
        ],
      },
      {
        path: "create-group",
        name: "create-pharmacy",
        component: () => import("@/views/Pharmacy/AddPharmacy.vue"),
      },
    ],
  },
];

export default routes;
