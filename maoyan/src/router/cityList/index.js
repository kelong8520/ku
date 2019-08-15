export default {
    path:"/cityList",
    name:"cityList",
    component:()=>import("views/cityList"),
    meta:{
        tabBar:false,
        auth:false
    },
}