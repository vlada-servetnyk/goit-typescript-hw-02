import Modal from "react-modal";
import s from './ImageModal.module.css';
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, img }) => {
    if (!img) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose} 
            className={s.modal}
            overlayClassName={s.overlay}
            shouldCloseOnOverlayClick={true} 
            shouldCloseOnEsc={true} 
        >
            <img src={img.urls.regular} alt={img.alt_description} className={s.image} />
        </Modal>
    )
};

export default ImageModal;