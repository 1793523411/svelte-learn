<script>
    import {get, readable} from 'svelte/store'
  let count = 0;
  let double = 1;
  const increntment = () => {
    count++;
  };

  const changeDouble = () => {
    double = double * 2;
    // alert("double");
  };
  $: console.log(`${count}`);
  $: console.log(`${double}`);

//   $: {
//     console.log(`the count is ${count}`);
//     double = count * 2;
//     console.log(`the double is ${double}`);
//   }
    const readableCount = readable(0,set => {
    setInterval(() =>{
        set(1)
    },1000)
})
</script>

{count}
<button on:click={increntment}>+++</button>
<br />
Double:{double}
<button on:click={changeDouble}>double</button>

<div>{$readableCount}</div>