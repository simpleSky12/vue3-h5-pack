import { defineStore } from 'pinia';
import piniaStore from '@/store/index';

export const useStoreDemoStore = defineStore('storeDemo', {
  state: () => ({}),
  getters: {},
  actions: {},
});
export function useStoreDemoOutsideStore() {
  return useStoreDemoStore(piniaStore);
}
