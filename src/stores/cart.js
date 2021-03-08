
import {writable,derived} from 'svelte/store'
import localCart from '../localCart'


const cart=writable([...localCart]);

export const cartTotal=derived(cart,($cart)=>{
  let total=  $cart.reduce( (acc, curr)=> {
        return (acc + curr.amount* curr.price)
    }, 0);
    return total.toFixed(2);
})
//local functions
const remove=(id,items)=>{
  return items.filter ((item)=>item.id!==id)
}
const toggleAmount=(id,items,action)=>{
  return items.map((item)=>{
    let newAmount;
    if(action==='inc'){
      newAmount=item.amount+1
    }
    if(action==='dec'){
      newAmount=item.amount-1
    }
    return item.id===id? {...item,amount:newAmount}:{...item}
  })
  
}

//global functions
export const removeItem= id =>{
  cart.update(storeValue=>{
    return remove(id,storeValue)
  }  
  )
}


export const increaseAmount= id =>{
  cart.update(value=>{
    return toggleAmount(id,value,'inc')
  }
  )
}

export const decreaseAmount= id =>{
  cart.update(value=>{
    return toggleAmount(id,value,'dec').filter(item=>item.amount>0)
  }
  )
}

export const addToCart= (i) =>{
  cart.update(value=>{
   const found=value.find(item=>item.id===i.id)
   if (found){
     return toggleAmount(i.id,value,'inc')
   } else {
     return [...value,{id:i.id,title:i.title,price:i.price,image:i.image,amount:1}]
   }

  })
}


export default cart;