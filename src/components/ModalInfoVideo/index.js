import { useEffect, useState } from 'react';
import InputSearch from '../InputSearch';
import MainButton from '../MainButton';
import CloseIcon from '../../assets/close.png'
import './styles.css';

export default function ModalInfoVideo({ status, handleClose }) {

    const [form, setForm] = useState({
        link: '',
        roomName: ''
    })

    const handleChangeInputValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Click");
    }

    useEffect(() => {

    })

    return (
        <div className={`modal-info-video ${status}`}>
            <form onSubmit={handleSubmit} autoComplete="off">
                <img
                    className='close-icon'
                    alt='close'
                    src={CloseIcon}
                    onClick={() => handleClose()} />
                <InputSearch
                    name={"roomName"}
                    value={form.roomName}
                    placeholder={"Nome da Sala"}
                    handler={handleChangeInputValue}
                />
                <InputSearch
                    name={"link"}
                    value={form.link}
                    placeholder={"Link do vídeo"}
                    handler={handleChangeInputValue}
                />
                <MainButton />
            </form>
        </div>
    )
}