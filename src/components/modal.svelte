<script lang="ts">
  import { afterUpdate, createEventDispatcher, onMount } from "svelte";
  let clazz = "";
  export { clazz as class };

  export let isOpen = false;

  const dispatch = createEventDispatcher();

  let closeEl: HTMLButtonElement;
  let focusedEl: HTMLElement;

  afterUpdate(() => {
    closeEl = document.querySelector("[data-id='close-modal-button']");
  });

  $: if (isOpen) {
    if (typeof document !== "undefined")
      focusedEl = <HTMLElement>document.activeElement;
    closeEl && closeEl.focus();
  }

  const closeModal = () => {
    dispatch("close");
    focusedEl && focusedEl.focus();
    focusedEl = null;
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div class={`modal ${clazz}`} on:click={closeModal}>
    <slot />
  </div>
{/if}
