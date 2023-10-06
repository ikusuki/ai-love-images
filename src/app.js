import './app.css';
import { TextInputBox } from './components/text-input-box';
import { ImageShowcase } from './components/image-showcase';
import { useImageGenerateRequestHook } from './hooks/use-image-generate-request-hook';

const App = () => {
  const { sendPrompt, img, isLoading } = useImageGenerateRequestHook();

  return (
    <div className="app">
      <ImageShowcase src={img} isLoading={isLoading} />
      <TextInputBox sendPrompt={sendPrompt} isLoading={isLoading} />
    </div>
  )
}

export default App;
