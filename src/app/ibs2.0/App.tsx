import { Home } from "./pages/Home"
import { ModalProvider } from "./context/ModalContext"
import { ToastProvider } from "./context/ToastContext"
import { Form } from "./Components/form/Index"

function App() {

  return (
    <ToastProvider>
      <ModalProvider>
        <div className={`min-h-screen bg-[#F3F4F6] w-full`}>
          <Home />
        <Form />

        </div>
      </ModalProvider>
    </ToastProvider>
  )
}

export default App
