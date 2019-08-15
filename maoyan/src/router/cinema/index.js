export default {
    path:"/cinema",
    name:"cinema",
    component:()=>import("views/cinema"),
    meta:{
        tabBar:true,
        auth:false
    },
}