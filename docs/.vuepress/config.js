module.exports = {
  title: '汤国斌的博客',
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '归档', link: '/timeLine/', icon: 'reco-date' },
      {
        text: '联系',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/Saber-tgb',
            icon: 'reco-github'
          },
          {
            text: '掘金',
            link: 'https://juejin.im/user/58cba614570c3500589701b2',
            icon: 'reco-blog'
          },
          {
            text: 'twitter',
            link: 'https://twitter.com/Saber_tgb',
            icon: 'reco-twitter'
          },
          {
            text: '博客圆',
            link: 'https://www.cnblogs.com/saber_tgb/',
            icon: 'reco-bokeyuan'
          },
          {
            text: '简书',
            link: 'https://www.jianshu.com/u/faa7b39aff7f',
            icon: 'reco-jianshu'
          },
          {
            text: 'NPM',
            link: 'https://www.npmjs.com/~saber-tgb',
            icon: 'reco-npm'
          }
          // {
          //   text: 'WeChat',
          //   link: 'https://mp.weixin.qq.com',
          //   icon: 'reco-wechat'
          // }
        ]
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    logo: '/images/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'saber_tgb',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2018',
    huawei: false
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
  serviceWorker: true,
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}
