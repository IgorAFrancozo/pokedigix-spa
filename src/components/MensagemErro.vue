<script>
import MensagemErroDTO from '../models/MensagemErroDTO';
export default {
  name: "mensagem-erro",
  props: {
    mensagemErroDTO: MensagemErroDTO,
  },
};
</script>

<template>
  <div class="toast-container position-absolute top-0 end-0 mt-5 p-3">
    <div
      id="liveToast"
      class="toast bg-danger text-white"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-body">
        {{ mensagemErroDTO.mensagemDeErro }}
      </div>
    </div>
  </div>
</template>