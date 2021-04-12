module.exports = {
    title: '公司文档',
    base: '/vuepresstest/',
    plugins:{
      'demo-container':{

      },
      run: {
        jsLabs: ['https://unpkg.com/element-ui/lib/index.js'],
        cssLabs: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
        reverse: true,
    }
    },
    extraWatchFiles: [
        '.vuepress/components/*', // 使用相对路径
      ]
}