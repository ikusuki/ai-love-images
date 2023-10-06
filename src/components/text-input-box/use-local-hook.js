import { useCallback, useRef } from 'react';

export const useLocalHook = (sendPrompt) => {

  const promptRef = useRef();
  
  const handleSubmit = useCallback((e) =>{
    e.preventDefault();
    // if(isLoading) {
    //   return; 
    // }
    sendPrompt(promptRef.current.value);
  }, [/*isLoading,*/ sendPrompt]);

  return {
    handleSubmit,
    promptRef
  }
}