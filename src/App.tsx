import MainPage from '@pages/MainPage';
import { SendEmailFormProvider } from '@contexts/SendEmailContext.tsx';


function App() {
  

  return (
    <SendEmailFormProvider>
      <MainPage/>
    </SendEmailFormProvider>
  )
}

export default App
