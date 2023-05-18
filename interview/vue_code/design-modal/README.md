- 看透style opacity 用法
   - 提供定制能力
      -默认定制
         modal/config.ts
      - 本应用全局定制
         main.ts
         app.use(Modal,{

         })
         Object.assign(config.style,options.style)
      - 组件定制 


      props:{
         default:config.style!.opacity
      }
- stylus 预编译
   & 混合 1px 问题

- i18n 国际化配置
   - 项目亮点 
      全局use vue-i18n
      createi18n({
         locale:strorage,
         message:
      })
      业务国际化语言包，添加组件语言包 完成配置
   - 难点
      国际化 组件的支持 ， 
      自定义的t 方法
      在项目没有启用国际化的时候， t  函数自己查找返回值
      启用了 .$