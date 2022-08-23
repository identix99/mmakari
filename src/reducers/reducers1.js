import {CardData} from "../Database/CardData";
import {Getdata} from "../constant";

//redusers
const inhitialState = CardData;

const  Reducer1 = (state = inhitialState, action) => {
    switch (action.type) {
      case Getdata : 
      let Matchingdata = state.Cards.filter((data)=>data.id === action.payload);
        for(let val of Matchingdata){
         Matchingdata = val ;
        }
       return {
         ...state ,
         Filldata : Matchingdata ,
      }

       default: return state;
    }
  };

export {Reducer1} ;
 