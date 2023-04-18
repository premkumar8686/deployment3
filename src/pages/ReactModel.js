import React,{ useState } from 'react';
import Modal from 'react-modal';



function ReactModel()
{
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {

        setIsOpen(true);

    }

    function closeModal() {

        setIsOpen(false);

    }

    return(
        <>
        <button onClick={openModal}>Open Model</button>
        
         <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
        </>
    );
}
export default ReactModel;