<template>
  <div class="dark:text-slate-400 dark:bg-slate-900 mt-18px">
    <H1>vue3 + h5</H1>
  </div>
</template>

<script lang="ts">
import request from '../utils/http/axios';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    onMounted(() => {
      const data = () => request({ url: '/list' });
      console.log('%c [ data ]-14', 'font-size:14px; background:#1890ff; color:#fff;', data);
    });
  },
});
</script>

<style lang="less" scoped></style>
