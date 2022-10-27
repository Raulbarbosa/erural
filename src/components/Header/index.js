import "./styles.css";
import Logo from '../../assets/logo.svg';
import Plus from '../../assets/plus.svg';
import { useState } from "react";
import ModalInfoVideo from "../ModalInfoVideo";

export default function Header() {

  const [status, setStatus] = useState(false);

  const openModal = () => {
    setStatus(true)
  }

  const closeModal = () => {
    setStatus(false)
  }

  return (
    <div className="content-header">
      <div className="area-logo-create-room">
        <img alt="Logo" src={Logo} />
        <div className="area-create-room" onClick={() => openModal()}>
          <img alt="plus" src={Plus} />
          <span>Criar Sala</span>
        </div>
      </div>
      {status && <ModalInfoVideo status={status} handleClose={closeModal} />}
    </div>
  )
}
