export default {
    path:"/search",
    name:"search",
    component:()=>import("views/search"),
    meta:{
        tabBar:true,
        auth:false
    },
}