<script>
import { get } from "svelte/store";
  import { username, welCome } from "./stroe.js";
  import {readableCount} from './stroe'
  console.log(username);
  console.log(get(username));
  //   username.set('new Name')
  const newName = "new username";
  username.update((existing) => newName);

  username.subscribe((newValue) => {
    console.log(newValue);
  });
</script>

<div>Store:{username}</div>
<div>{$readableCount}</div>
<div>
    {$welCome}
</div>