import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useModalStore = defineStore('modalStore', () => {
    const isOpenModal = ref(false);

    const openingAndClosingModal = product => {
        isOpenModal.value = !isOpenModal.value
    };

    return {
        isOpenModal,
        openingAndClosingModal
    }
})