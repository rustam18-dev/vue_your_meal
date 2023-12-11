import {defineStore} from 'pinia'
import { useModalStore} from "@/store/modalStore";
import {ref, computed, watch} from 'vue'

export const useCartStore = defineStore('cartStore', () => {
  const count = ref(0)
  const carts = ref([])

  const countCart = computed(() => {
    return carts.value.reduce((total, cart) => total + cart.quantity, 0)
  })

  const cartsInLocalStorage = localStorage.getItem('cart')
  if (cartsInLocalStorage) {
    carts.value = JSON.parse(cartsInLocalStorage)._value;
  }

  const totalPriceOfProducts = computed(() => {
    return carts.value.reduce((total, cart) => total + (cart.price * cart.quantity), 0)
  })

  const priceOfProduct = product => {
    return  product.price * product.quantity
  }

  const isInCart = product => {
    if (carts.value.length === 0) return false

    return carts.value.find(item => item.id === product.id)
  }

  const addToCart = product => {
    carts.value.push({...product})
    const modalStore = useModalStore();

    modalStore.isOpenModalProduct = false
  }

  const addingQuantity = product => {
    product.quantity += 1
  }

  const diminutionQuantity = product => {
    if (product.quantity > 1) {
      return product.quantity -= 1;
    }

    carts.value = carts.value.filter(item => item.id !== product.id);
  };

  watch(() => carts, (state) => {
    localStorage.setItem('cart', JSON.stringify(state))
  }, {deep: true})



  return {
    count,
    carts,

    countCart,
    totalPriceOfProducts,

    priceOfProduct,
    isInCart,
    addToCart,
    addingQuantity,
    diminutionQuantity,
  }

})