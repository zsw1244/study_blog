// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
          { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《JavaScript教程》笔记', link: '/note/javascript/' },
          { text: '《JavaScript高级程序设计》笔记', link: '/note/js/' },
          { text: '《ES6 教程》笔记', link: '/note/es6/' },
          { text: '《Vue》笔记', link: '/note/vue/' },
          { text: '《React》笔记', link: '/note/react/' },
          {
            text: '《TypeScript 从零实现 axios》',
            link: '/note/typescript-axios/',
          },
          {
            text: '《Git》学习笔记',
            link: '/note/git/',
          },
          {
            text: 'TypeScript笔记',
            link: '/pages/51afd6/',
          },
          {
            text: 'JS设计模式总结笔记',
            link: '/pages/4643cd/',
          },
        ],
      },
    ],
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      { text: 'CSS', link: '/pages/c8f128/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' }
    ],
  },
  {
    text: '待学',
    link: '/notstudy/',
    items: [
      { text: 'React', link: '/pages/' },
      { text: 'Vue3', link: '/pages/4429f0/' },
      { text: 'Nodejs', link: '/pages/b39b59/' },
      { text: 'Nestjs', link: '/pages/' },
      { text: 'vue源码解析', link: '/pages/' },
      { text: 'React源码解析', link: '/pages/' },
      { text: 'ES6', link: '/pages/7cf21f/' },
      { text: 'JavaScript', link: '/pages/c3f6c9/' },
      { text: 'typescript', link: '/pages/97683a/' }
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: 'npm库', link: '/pages/' },
      { text: '面试', link: '/pages/' },
      { text: '算法', link: '/pages/' },
      { text: '杂项', link: '/pages/7fc8ce/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
