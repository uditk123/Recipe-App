import { defineStore } from "pinia";

export const useLikeStore = defineStore("Likes",{
      //    Stores , getters , actions
           state: () => ({
           Like: 0
    }),

    getters: {
        DoubleLikes: (state) => state.Like *2
    },

    actions: {
        increment(){
            this.Like++;
        },
        decrement(){
            this.Like--;
        },
    }
})

