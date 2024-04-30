import React from "react";
// import Popup from './views/theme/colors/Popup'

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Profile = React.lazy(() => import('./views/auth/Profile'))
const changePassword = React.lazy(() => import('./views/auth/ChangePassword'))

/* ----------------------- USER DETAILS WITH LIST ADD ----------------------- */
const IndexForm = React.lazy(() => import("./views/User/IndexUser"));
const UserForm = React.lazy(() => import("./views/User/UserForm"));

/* --------------------------- SEXUAL ORIENTATION --------------------------- */
const List = React.lazy(() => import("./views/Sexual Orientation/Index"));
const SeexualOrientationForm = React.lazy(() =>
import("./views/Sexual Orientation/SeexualOrientationForm")
);

/* --------------------------------- HOBBIES -------------------------------- */
const Interest = React.lazy(() => import("./views/Hobbies/Index"));
const InterestForm = React.lazy(() => import("./views/Hobbies/InterestForm"));

/* ---------------------------------- PETS ---------------------------------- */
const Pets = React.lazy(() => import("./views/Pet/IndexPets"));
const AddPet = React.lazy(() => import("./views/Pet/AddPet"));

/* ------------------------------- ZODIAC SIGN ------------------------------ */
const Sign = React.lazy(() => import("./views/Zodiac Sign/IndexSign"));
const AddSign = React.lazy(() => import("./views/Zodiac Sign/AddSign"));

/* --------------------------------- COUNTY CODE -------------------------------- */
const CountryCode = React.lazy(() => import("./views/country Code/index"));
const CountryCodeForm = React.lazy(() => import("./views/country Code/countryCodeFrom"));


const Notification=React.lazy(()=>import('./views/notification/Index'));
const AddNotification=React.lazy(()=>import('./views/notification/NotificationForm'))

const Plans=React.lazy(()=>import('./views/Plans/Index'));
const AddPlans=React.lazy(()=>import('./views/Plans/planForm'))

const Subscription =React.lazy(()=>import('./views/subscriptions/index'));

const Reports =React.lazy(()=>import('./views/Reports/index'));

// const AddSubscription=React.lazy(()=>import('./views/subscriptions/subscriptionFrom'))

// const View = React.lazy(() => import("./views/theme/Users/west/ViewDemo"));
// const Test = React.lazy(() => import("./views/theme/colors/west/test"));

// const Interest = React.lazy(() => import("./views/theme/listPages/Interest"));

// const common = React.lazy(() => import('./views/theme/colors/common'))

// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// // Base
// const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
// const Cards = React.lazy(() => import('./views/base/cards/Cards'))
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
// const Navs = React.lazy(() => import('./views/base/navs/Navs'))
// const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
// const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
// const Progress = React.lazy(() => import('./views/base/progress/Progress'))
// const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
// const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// // Buttons
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

// //Forms
// const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
// const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
// const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
// const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
// const Range = React.lazy(() => import('./views/forms/range/Range'))
// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// const Charts = React.lazy(() => import('./views/charts/Charts'))

// // Icons
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// // Notifications
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
// const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

// const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },

  /* ------------------------ user routes with list add ----------------------- */
  { path: "/user", name: "", element: IndexForm, exact: true },
  // { path: "/test", name: "", element: Test, exact: true },
  { path: "/indexForm", name: "", element: UserForm, exact: true },

  /* ----------------- SEXUAL ORIENTATION ROUTES WITH ADD,LIST ---------------- */
  { path: "/sexual_orientation", name: "", element: List, exact: true },
  {
    path: "/SeexualOrientationForm",
    name: "",
    element: SeexualOrientationForm,
    exact: true,
  },

  /* ---------------------- HOBBIES ROUTES WITH ADD,LIST ---------------------- */
  { path: "/interest", name: "", element: Interest, exact: true },
  { path: "/InterestForm", name: "", element: InterestForm, exact: true },

    /* ---------------------- COUNTRY CODE ROUTES WITH ADD,LIST ---------------------- */
    { path: "/CountryCode", name: "", element: CountryCode, exact: true },
    { path: "/CountryCodeForm", name: "", element: CountryCodeForm  , exact: true },

  /* ------------------------ PETS ROUTES WITH ADD,LIST ----------------------- */
  { path: "/pets_list", name: "", element: Pets, exact: true },
  { path: "/AddPet", name: "", element: AddPet, exact: true },

  /* -------------------- ZODIAC SIGN ROUTES WITH ADD,LIST -------------------- */
  { path: "/zodiac_sign_list", name: "", element: Sign, exact: true },
  { path: "/AddSign", name: "", element: AddSign, exact: true },

  { path: '/profile', name: 'Profile', element: Profile },
  { path: '/changePassword', name: 'Change Password', element: changePassword },

  { path: '/notifications', name: '', element: Notification },
  { path: '/AddNotification', name: '', element: AddNotification },

  { path: '/plans', name: '', element: Plans },
  { path: '/AddPlans', name: '', element: AddPlans },

  { path: '/subscription', name: '', element: Subscription },

  { path: '/report', name: '', element: Reports },

  // { path: '/AddSubscription', name: '', element: AddSubscription },

  // { path: '/user/views', name: 'User', element: Users },
  // { path: '/user/common', name: 'common', element: common },
  // { path: "/view", name: "", element: View },
  // { path: '/base', name: 'Base', element: Cards, exact: true },
  // { path: '/base/accordion', name: 'Accordion', element: Accordion },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', element: Cards },
  // { path: '/base/carousels', name: 'Carousel', element: Carousels },
  // { path: '/base/collapses', name: 'Collapse', element: Collapses },
  // { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  // { path: '/base/navs', name: 'Navs', element: Navs },
  // { path: '/base/paginations', name: 'Paginations', element: Paginations },
  // { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  // { path: '/base/popovers', name: 'Popovers', element: Popovers },
  // { path: '/base/progress', name: 'Progress', element: Progress },
  // { path: '/base/spinners', name: 'Spinners', element: Spinners },
  // { path: '/base/tables', name: 'Tables', element: Tables },
  // { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  // { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  // { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  // { path: '/charts', name: 'Charts', element: Charts },
  // { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  // { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  // { path: '/forms/select', name: 'Select', element: Select },
  // { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  // { path: '/forms/range', name: 'Range', element: Range },
  // { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  // { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  // { path: '/forms/layout', name: 'Layout', element: Layout },
  // { path: '/forms/validation', name: 'Validation', element: Validation },
  // { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', element: Flags },
  // { path: '/icons/brands', name: 'Brands', element: Brands },
  // { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  // { path: '/notifications/badges', name: 'Badges', element: Badges },
  // { path: '/notifications/modals', name: 'Modals', element: Modals },
  // { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  // { path: '/widgets', name: 'Widgets', element: Widgets },
];

export default routes;
