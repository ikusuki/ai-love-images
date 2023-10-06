import { useCallback, useRef } from 'react';

export const useLocalHook = (sendPrompt, isLoading) => {

  const promptRef = useRef();
  
  const handleSubmit = useCallback((e) =>{
    // Avoid default form submission (refreshing the page )
    e.preventDefault();
    // Avoid sending multiple requests until the previous one is finished
    if(isLoading) {
      return; 
    }
    sendPrompt(promptRef.current.value);
  }, [isLoading, sendPrompt]);

  return {
    handleSubmit,
    promptRef
  }
}
