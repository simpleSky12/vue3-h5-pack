// 自动引入vant中函数组件的样式
import  {
  VantResolve,createStyleImportPlugin
} from 'vite-plugin-style-import'

export const AutoImportStyles = () => {
  return createStyleImportPlugin({
    resolves: [VantResolve()],
    // 自定义规则
    // libs: [
    //   {
    //     libraryName: 'vant',
    //     esModule: true,
    //     resolveStyle: (name) => `vant/es/${name}/style/index`
    //   }
    // ]
  });
};
