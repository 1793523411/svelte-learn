<script>
  import Dog from "./Dog.svelte";
  import Count from "./Count.svelte";
  import SignupForm from "./SignupForm.svelte";
  import Hook from "./Hook.svelte";
  import Stroe from "./Stroe.svelte";
  import Button from "./Button.svelte";
  import LifeCycle from "./LifeCycle.svelte";
  import Bind from "./Bind.svelte";
  import Bind2 from './Bind2.svelte'
  import Car from './Car.svelte'

  let carInMovement
  export let name;
  let disable = "这是父组件的值";
  setTimeout(() => {
    {
      disable = false;
    }
  }, 2000);
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}</h1>
<Dog />
<Count />

<hr />

<SignupForm {disable} />

<hr />

Hook:
<Hook />

<hr />

Store:
<Stroe />

<hr />

<Button>Insert this info slot</Button>
<Button />

<Button>
  Insert some thing
  <p slot="before">Add the before</p>
  <p slot="after">Add the after</p>
</Button>

<hr />

<LifeCycle />

<hr />

<Bind />

<Bind2></Bind2>

<Car bind:inMovement={carInMovement}></Car>

{carInMovement}