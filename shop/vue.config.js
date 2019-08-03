module.exports = {
    devServer:{
            proxy:{
                "/jm":{
                    //
                    "target":"http://10.9.14.239:3000",
                    "changeOrigin":true,
                    "pathRewrite" :{
                        "^/jm":""
                     }
                 },
                 "/zjm":{
                     "target":"http://h5.jumei.com",
                     "changeOrigin": true,
                     "pathRewrite":{
                         "^/zjm":""
                     }
                 }
             }
        
         }
    }