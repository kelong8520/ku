export default {
    path:"/detail/:id/:name",
    name:"detail",
    component:()=>import("views/detail"),
    meta:{
        tabBar:false,
        auth:false
    },
    props:true
}