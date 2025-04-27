import { defineStore } from "pinia";

export const useStore = defineStore( 'store',{
    state:()=>({
        products: [],
        category:[],
        cart: [],
        banners: [],
        colors: [],
        
    }),
    actions:{
        addToCart(products) {
            this.cart.push(products)
        },

        // removeFromCart(id) {
        //    this.cart=this.cart.filter((item)=>item.id !==id)
        // }
    },
    persist:true
})