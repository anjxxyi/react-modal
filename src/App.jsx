import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  const [modal, setModal] = useState(false);
  const handleToggleModal = () => {
    setModal(!modal);
  }

  return (
    <div className="App">
      <Header />
      <div id="Container">
        <button onClick={handleToggleModal}>ModalOpen</button>
        {/* {modal && <Modal setModal={setModal}/>} */}
        {modal ? 
          <Modal setModal={setModal} /> 
        : null}
      </div>
      <Footer />
    </div>
  )
}

export default App
