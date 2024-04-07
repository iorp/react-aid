//import  FSON  from '@ioutil/ node/lib/plugins/fson';
import FSON from '@iorp/node-aid/src/plugins/FSON';

  recurse
  const url ={
    readParameters(){ 
    let args = {}
     if(window.location.search && window.location.search.startsWith('?') && window.location.search.length>1){
     
      args = FSON.parse(`(${window.location.search.trim().substring(1)})`)
    
     }
     return args
    }
    
  }

export default url;