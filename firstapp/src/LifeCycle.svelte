<script>
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";
  onMount(async () => {
    console.log("onMount");
    const interval = setInterval(() => {
      console.log("hey");
    }, 1000);
    return () => {
      console.log("组件被摧毁");
      clearInterval(interval);
    };
  });
  onDestroy(() => {});
  beforeUpdate(() => {});
  afterUpdate(() => {});
</script>
