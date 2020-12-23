<script>
  let name = "";
  console.log(name);

  let goodDog = [];
  let selected = [];
  const goodDogs = [{ name: "Roger" }, { name: "Syd" }];
  let dogs = ["Roger", "Syd"];
  $: console.log(name);

  let myInputField

</script>

<input type="text" bind:value={name} />
{name}

<h2>Who's a good dog?</h2>
<ul>
  {#each dogs as dog}
    <li>{dog} <input type="checkbox" bind:group={goodDog} value={dog} /></li>
  {/each}
</ul>
<h2>Good dogs according to me:</h2>
<ul>
  {#each goodDog as dog}
    <li>{dog}</li>
  {/each}
</ul>

<hr />

<h2>List of possible good dogs:</h2>
<select multiple bind:value={selected}>
  {#each goodDogs as goodDog}
    <option value={goodDog}>{goodDog.name}</option>
  {/each}
</select>
{#if selected.length}
  <h2>Good dog selected:</h2>
  <ul>
    {#each selected as dog}
      <li>{dog.name}</li>
    {/each}
  </ul>
{/if}


<hr>

<input bind:this={myInputField} />
