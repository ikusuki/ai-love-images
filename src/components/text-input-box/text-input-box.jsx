import tenoChanIcon from "./assets/teno-chan.png"
import "./text-input-box.css";
import { useLocalHook } from "./use-local-hook";

export const TextInputBox = ({sendPrompt, isLoading }) => {

  const { promptRef, handleSubmit} = useLocalHook(sendPrompt, isLoading);
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <button className="btn-input"><img src={tenoChanIcon} width="50" alt="tenochan" className={`${isLoading ? "animate" : ""}`}/></button>
        <input ref={promptRef} type="text" className="input-text" placeholder="テラーノベルの可愛いテノちゃん" />    
      </div>
    </form>
  )}