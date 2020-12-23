<script>
import { createEventDispatcher } from "svelte";


    const dispatch = createEventDispatcher()

    dispatch('eventName')

    const value = 'something'

    dispatch('eventName',value)

    dispatch('eventName',{
        someProperty:value
    })
</script>