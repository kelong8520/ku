export default {
    path:"/mine",
    name:"mine",
    component:()=>import("views/mine"),
    meta:{
        tabBar:false,
        auth:true
    },
}