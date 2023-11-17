import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useModalStore = defineStore('modalStore', () => {
  const isOpenModal = ref(false);
  const products = ref([])

  const openingAndClosingModal = product => {
    products.value = [];

    products.value.push({...product, quantity: 1})
    isOpenModal.value = !isOpenModal.value
  };

  return {
    products,
    isOpenModal,
    openingAndClosingModal
  }
})