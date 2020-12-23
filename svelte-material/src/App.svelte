<script>
//   import Button from "@smui/button";
//   import Fab from "@smui/fab";
//   import Textfield from "@smui/textfield";
//   import HelperText from "@smui/textfield/helper-text";
//   import { Label, Icon } from "@smui/common";
import Button from "svelte-material-ui/components/Button";
</script>

<Button on:click={() => alert('Clicked!')}>Just a Button</Button>
<!-- <Button variant="raised"><Label>Raised Button, Using a Label</Label></Button> -->
<Button some-arbitrary-prop="placed on the actual button">Button</Button>

<div>
	UI
</div>
