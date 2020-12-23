<script>
  export let inMovement = false;
</script>

<button on:click={() => inMovement = !inMovement }>Start car</button>

{inMovement}
