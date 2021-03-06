import {writable} from 'svelte/store'
import localProducts from '../localProducts'
const store=writable(flattenProduct([...localProducts]))

//subscribe
//set
//update

function flattenProduct(data) {
    return data.map(item=>{
        let image=item.image.url
        return {...item,image} })
}
export default store