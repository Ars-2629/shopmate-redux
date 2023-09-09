import { useEffect } from 'react';

export  function useTitle(title) {

useEffect(()=>{
    document.title=`${title} | ShopMate-Redux`;
},[title])

  return null;
}
