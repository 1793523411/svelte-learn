<script>
  import { setContext, getContext } from "svelte";

  const someObj = {
    a: 1,
    b: 2,
  };

  setContext("someKey", {
    a: 12,
    b: 20,
  });

  const other = getContext("someKey");
</script>

<div>{someObj.a}</div>
<div>{other.a}</div>
