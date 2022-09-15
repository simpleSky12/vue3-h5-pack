<template>
  <div class="flex flex-col items-center">
    <h3>首页</h3>
    <h4>mock数据请求</h4>
    <div v-for="item in homeData.list" :key="item.id" class="mt-10px" :class="{ isImportant: item.isImportant }">
      {{ item.name }} —— title:{{ item.title }}
    </div>
  </div>
</template>

<script setup lang="ts" name="HomeIndex">
  import { get } from '/@/utils/http/axios';

  interface IListType {
    id: number;
    name: string;
    title: string;
    isImportant: boolean;
  }
  interface IResultType {
    list: IListType[];
  }

  const homeData = reactive({ list: [] as IListType[] });
  onMounted(async () => {
    const result = await get<IResultType>({ url: '/mock/api/listResult' });
    homeData.list = result.list;
  });
</script>

<style lang="less" scoped>
  .isImportant {
    color: rgb(86, 143, 222);
    font-weight: bold;
  }
</style>
