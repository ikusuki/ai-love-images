import { useCallback, useState } from "react";

// Assuming that the API is running on port 3001
// https://github.com/ikusuki/ai-love-open-ai
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