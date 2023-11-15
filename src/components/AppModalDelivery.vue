<template>
   <div :class="['modal modal_delivery', {'modal_open': modalStore.isOpenModal}]">
    <div class="modal__main modal-delivery">
      <div class="modal-delivery__container">
        <h2 class="modal-delivery__title">Доставка</h2>

        <form class="modal-delivery__form" id="delivery">
          <fieldset class="modal-delivery__fieldset">
            <input class="modal-delivery__input" type="text" placeholder="Ваше имя">
            <input class="modal-delivery__input" type="tel" placeholder="Телефон">
          </fieldset>

          <fieldset class="modal-delivery__fieldset modal-delivery__fieldset_radio">
            <label class="modal-delivery__label">
              <input class="modal-delivery__radio " type="radio" name="format" value="pickup">
              <span>Самовывоз</span>
            </label>
            <label class="modal-delivery__label">
              <input class="modal-delivery__radio" type="radio" name="format" value="delivery" checked>
              <span>Доставка</span>
            </label>
          </fieldset>

          <fieldset class="modal-delivery__fieldset ">
            <input class="modal-delivery__input" type="text" placeholder="Улица, дом, квартира">
            <input class="modal-delivery__input modal-delivery__input_half" type="number" placeholder="Этаж">
            <input class="modal-delivery__input modal-delivery__input_half" type="number" placeholder="Домофон">
          </fieldset>
        </form>

        <button class="modal-delivery__submit" type="submit" form="delivery">Оформить</button>
      </div>

      <button class="modal__close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.07422" y="5.28247" width="1" height="20" transform="rotate(-45 5.07422 5.28247)"/>
          <rect x="5.78125" y="19.4246" width="1" height="20" transform="rotate(-135 5.78125 19.4246)"/>
        </svg>
      </button>
    </div>
  </div>
</template>


<script setup>
import { useModalStore } from '../store/modalStore';

const modalStore = useModalStore();
</script>

<style scoped>

</style>