import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import AddStudent from "./components/AddStudent.vue";
import UpdateStudent from "./components/UpdateStudent.vue";
import Archive from "./components/Archive.vue";
import ViewStudent from "./components/ViewStudent.vue";
import HelpPage from "./components/Help.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "AddStudent",
    component: AddStudent,
    path: "/add-student",
  },
  {
    name: "UpdateStudent",
    component: UpdateStudent,
    path: "/update-student/:id",
  },
  {
    name: "Archive",
    component: Archive,
    path: "/archive",
  },
  {
    name: "ViewStudent",
    component: ViewStudent,
    path: "/view-student/:id",
  },
  {
    name: "HelpPage",
    component: HelpPage,
    path: "/help",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
