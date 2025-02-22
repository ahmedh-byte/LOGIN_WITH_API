import { create } from "zustand";

export const useLoader =create((set)=>({
  
    index: false,

    open:() => set((state)=>({index:true})),
    close:() => set((state)=>({index:false})),




}))