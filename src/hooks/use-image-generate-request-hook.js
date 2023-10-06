import { useCallback, useState } from "react";

const IMAGE_GENERATOR_API_ENDPOINT =  "http://localhost:3001/api/open-ai/image-generator";

const sendRequest = async (prompt) => {
  const response = await fetch(
    IMAGE_GENERATOR_API_ENDPOINT,
    {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        prompt,
      })
    }
  )
  
  return(response.json());
}

export const useImageGenerateRequestHook = () => {
  const [img, setImgUrl] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const sendPrompt = useCallback(async (prompt) => {
    if (!prompt) return;
    setLoading(true);
    const response = await sendRequest(prompt);
    setLoading(false);
    setImgUrl(response.url)
  }, []);

  return {
    sendPrompt,
    img,
    isLoading
  }
}