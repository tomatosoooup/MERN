import { useState } from "react";
import { Modal } from "./components/modal";

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    //Я додав висоту в 200dvh щоб можна було побачити, що скрол не відбувається при відкрій модалці.
    <div className="flex items-center justify-center h-[200dvh]">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 self-start mt-40"
      >
        Open Modal
      </button>
      <Modal open={open} disableGlobalScroll={true} onClose={handleClose}>
        <div>
          <h1 className="text-lg font-bold mb-4">
            Будь який контент в модалці
          </h1>
          <p>Тіло модального вікна</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
