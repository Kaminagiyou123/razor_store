import {writable} from 'svelte/store'
import url from '../strapi/URL'
import getProducts from '../strapi/getProduct'
const store=writable([],()=>{
    setProducts();
    return ()=>{};
})

async function setProducts(){
    let products= await getProducts();
    if(products){
        products=flattenProduct(products)
        store.set(products)
    }
}
//subscribe
//set
//update

function flattenProduct(data) {
    return data.map(item=>{
        // let image=item.image.url
        let image=`${url}${item.image[0].formats.thumbnail.url}`
        return {...item,image} })
}
export default store