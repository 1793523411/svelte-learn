<script>
  let selected;
  const goodDogs = [{ name: "Roger" }, { name: "Syd" }];
</script>

<select bind:value={selected}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>

<hr>


{selected}

<hr>


<select bind:value={selected}>
  {#each goodDogs as goodDog}
    <option value={goodDog}>{goodDog.name}</option>
  {/each}
</select>
{#if selected}
  <h2>Good dog selected: {selected.name}</h2>
{/if}
