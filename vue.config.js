const path = require("path");

module.exports = {
    devServer:{
        "/api":{
            target:"https://www.dkhs.com",
            changeOrigin:true
        }
    },
    configureWebpack:{
        alias:{
            "@":path.join(__dirname,"./src"),
            "@api":path.join(__dirname,"./src/api"),
            "@assets":path.join(__dirname,"./src/assets"),
            "@common":path.join(__dirname,"./src/common"),
            "@components":path.join(__dirname,"./src/components"),
            "@pages":path.join(__dirname,"./src/pages"),
            "@router":path.join(__dirname,"./src/router"),
            "@store":path.join(__dirname,"./src/store"),
            "@utils":path.join(__dirname,"./src/utils"),
        }
    }
}