import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useModalStore = defineStore('modalStore', () => {
  const isOpenModalProduct = ref(false);
  const isOpenModalDelivery = ref(false);
  const products = ref([])

  const openingAndClosingModalProduct = product => {
    products.value = [];

    products.value.push({...product, quantity: 1})
    isOpenModalProduct.value = !isOpenModalProduct.value
  };

  const openingAndClosingModalDelivery = () => {
    return  isOpenModalDelivery.value = !isOpenModalDelivery.value
  };

  return {
    products,
    isOpenModalProduct,
    isOpenModalDelivery,
    openingAndClosingModalProduct,
    openingAndClosingModalDelivery
  }
})