
import actionTypes from "./actionTypes";
const initializer = {
   algorithm: 'bubble',
   color: '#35c6ff',
   speed: 100,
   range: '30',
   play: false,
   values: [],
   timeouts:[],
   
   source: 0,
   destination: 0,
   map: [],
   cities: [],
   path: [],
   stops: [],
   roads: new Set(),
   navigate: false,
   findPath: false,
   maxCities: 0,
   mapSize:{n:0, m:0}
};

const updateProps = (state=initializer,action) => {
   switch(action.type){
      
      case 'UPDATE_RANGE':{
         let arr=[];
         for(let i = 0; i < action.range; i++)
            arr.push([Math.floor(Math.random()*100)+1,i]);

         return {...state, range:action.range, values:arr};
      }

      case 'UPDATE_VALUES': {
         return {...state,values:action._values};
      }

      case 'UPDATE_SPEED':{
         return {...state, speed:action.speed};
      }

      case 'UPDATE_COLOR':{
         return {...state, color:action.color};
      }

      case 'UPDATE_ALGORITHM':{
         return {...state, algorithm:action.algorithm};
      }

      case 'UPDATE_TIEMOUTS':{
         return {...state, timeouts:action._timeouts};
      }

      case 'CHANGE_VALUES':{
         let arr=[],range = state.range;
         for(let i = 0; i < range; i++)
            arr.push([Math.floor(Math.random()*100)+1, i]);
         return {...state,values:arr};
      }

      case 'PLAY_PAUSE': {
         return {...state,play:action._play};
      }
      case actionTypes.UPDATE_CITIES:{
         return {...state, cities: action.cities};
     }

     case actionTypes.UPDATE_DESTINATION:{
         return {...state, destination: action.destination};
     }

     case actionTypes.UPDATE_FINDPATH:{
         return {...state, findPath: action.findPath};
     }

     case actionTypes.UPDATE_SOURCE:{
         return {...state, source: action.source};
     }

     case actionTypes.UPDATE_MAXIMUM_CITIES:{
         return {...state, maxCities: action.maxCities};
     }

     case actionTypes.UPDATE_ROADS:{
         return {...state, roads: action.roads};
     }

     case actionTypes.UPDATE_MAPSIZE:{
         return {...state, mapSize: action.mapSize};
     }

     case actionTypes.UPDATE_SHORTESTPATH: {
         return {...state, path: action.path};
     }

     case actionTypes.UPDATE_MAP:{
         return {...state, map: action.map};
     }

     case actionTypes.UPDATE_STOPS:{
         return {...state, stops: action.stops};
     }


      default:
         return state;
   }
}

export default updateProps;