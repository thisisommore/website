<script lang="ts">
  let clazz: string = "";
  export { clazz as class };
</script>

<button
  aria-label="close this popup"
  data-id="close-modal-button"
  on:click
  class={clazz}
>
  <img alt="Close" role="presentation" src="/x.svg" />
</button>
