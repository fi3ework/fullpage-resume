# fullpage-resume

用 fullpage 做的一款配置式的网页版简历，不用写代码，改配置即可~~（改一下，玩一年，装备不花一分钱）~~。

**预览：[DEMO](http://firework.studio/fullpage-resume/)**

## 安装

1. npm install
2. 修改 _config.yml
3. 命令行中执行 npm run build
4. 静态页面已近打包在 dist 中

## 使用



## 配置

以下是 DEMO 中的配置

```yaml
# overall
title: fi3ework's resume

# page 1
name: Wee
nickname: fi3ework
introduce: 前端工程师
social:
  github: //github.com/fi3ework 
  wechat: assets/wechat.JPG
  email: 805843200@qq.com
  juejin: //juejin.im/user/56417d1e00b0bf378b7297ea
  tele: 185xxxxoooo
pdf_name: '[WEIWEI_RESUME.pdf](assets/resume.pdf)'

# page 2
education:
  title: 教育背景
  stages:
    - 
      time: 2014.09 - 2017.03
      university: 北京理工大学
      major: 仪器科学与技术
    - 
      time: 2010.09 - 2014.06
      university: 北京理工大学
      major: 测控技术与仪器

# page 3
work_experience:
  title: 工作经历
  stages: 
    - 
      company: 😶😐😑公司
      job_title: 图像算法工程师
      time: 2017.3 - 至今
      tech_stack:
        - C++
        - OpenCV
      description:
        - 写BUG
        - 修BUG

# page 4
open_source:
  title: 开源作品
  works:
    - 
      name: hexo-theme-archer
      abstract: 一款简洁精致的 hexo 主题
      link: https://github.com/fi3ework/hexo-theme-archer
      tech_stack: gulp sass 
      description: 
        - Lorem ipsum dolor sit amet, offendit referrentur ad vix, his id lucilius partiendo. 
        - In populo aperiri eum, eam te suas consul scaevola, eam ut mollis partiendo definitionem. 
    - 
      name: douban-movie-react
      abstract: 基于 React 的超高仿豆瓣电影
      link: https://github.com/fi3ework/douban-movie-react
      tech_stack: react redux react-router antd
      description: 
        - Pro accumsan oportere eu, dicta eruditi dissentiet eu quo. Pri id postea aperiri eloquentiam. 
        - Quem salutatus an ius, id erat aliquid per. Ullum copiosae comprehensam ne pri, id libris alienum pro.

# page 5
tech_stack:
  title: 专业技能
  techs:
    - HTML5
    - CSS3
    - ES5/6
    - Gulp
    - Git
    - 前端工程化
    - 性能优化
```

## 致谢

模板的简历修改自 [simonwoo/cv](https://github.com/simonwoo/cv) 😀