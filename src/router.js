import Vue from "vue";
import Router from "vue-router";
const Home = () => import("@/views/home/Home");
const About = () => import("@/views/about/about");
const News = () => import("@/views/news/news");
const NewsDetail = () => import("@/views/news/newsDetail");
const Contact = () => import("@/views/contact/contact");
const Product = () => import("@/views/product/product");
const ProductDetail = () => import("@/views/product/productDetail");
const Deivce = () => import("@/views/device/device");
const DeviceDetail = () => import("@/views/device/deviceDetail");
const Market = () => import("@/views/market/market");
const MarketDetail = () => import("@/views/market/marketDetail");
const Construct = () => import("@/views/construct/construct");
const ConstructDetail = () => import("@/views/construct/constructDetail");
const Engineering = () => import("@/views/engineering/engineering");
const EngineeringDetail = () => import("@/views/engineering/engineeringDetail");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/news", component: News },
    { path: "/news/detail/", component: NewsDetail },
    { path: "/contact", component: Contact },
    { path: "/product", component: Product },
    { path: "/product/detail", component: ProductDetail },
    { path: "/device", component: Deivce },
    { path: "/device/detail", component: DeviceDetail },
    { path: "/market", component: Market },
    { path: "/market/detail", component: MarketDetail },
    { path: "/construct", component: Construct },
    { path: "/construct/detail", component: ConstructDetail },
    { path: "/engineering", component: Engineering },
    { path: "/engineering/detail", component: EngineeringDetail }
  ]
});
