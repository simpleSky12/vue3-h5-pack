/**
 * @name  AutoRegistryComponents
 * @description 按需加载，自动引入第三方库组件和自己定义的组件
 */
import Components from 'unplugin-vue-components/vite';
import {  VueUseComponentsResolver, VantResolver, } from 'unplugin-vue-components/resolvers';
export const AutoRegistryComponents = () => {
  return Components({
    dirs: ['src/components'],
    extensions: ['vue'],
    deep: true,
    dts: 'types/components.d.ts',
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    importPathTransform: (v) => v,
    allowOverrides: false,
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [ VueUseComponentsResolver(),  VantResolver()],
  });
};
