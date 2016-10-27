使用export和import实现模块化

###全局安装
  npm install babel-cli -g

###
  npm install babel-preset-es2015 --save-dev

  npm install browserify --save-dev
  npm install babelify --save-dev



### 在package.json里面配置
    "browserify": {
        "transform": [
          "babelify"
        ]
      },

### touch  .babelrc

    {
        'presets':['es2015']
    }


###  运行
     browserify src/main.js -o lib/main.js

     直接浏览器中运行....