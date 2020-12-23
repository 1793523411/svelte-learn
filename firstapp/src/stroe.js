import {writable,get,readable, derived} from 'svelte/store'
export const username = writable('Guest')
console.log(get(username))
get(username)

export const readableCount = readable(0,set => {
    setInterval(() => {
        set(get(readableCount)+1)
    },1000)
})

export const welCome = derived(username,$username => {
    return `Welcome ${$username}`
})
