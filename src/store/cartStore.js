import {defineStore} from 'pinia'
import { useModalStore} from "@/store/modalStore";
import {ref, computed} from 'vue'

export const useCartStore = defineStore('cartStore', () => {
  const count = ref(0)
  const carts = ref([])

  const countCart = computed(() => {
    return carts.value.reduce((total, cart) => total + cart.quantity, 0)
  })

  const totalPriceOfProducts = computed(() => {
    return carts.value.reduce((total, cart) => total + (cart.price * cart.quantity), 0)
  })

  const priceOfProduct = product => {
    return  product.price * product.quantity
  }

  const isInCart = product => {
    if ( carts.value.length === 0) return false

    return carts.value.find(item => item.id === product.id)
  }

  const addToCart = product => {
    carts.value.push({...product})
    const modalStore = useModalStore();

    modalStore.isOpenModal = false
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