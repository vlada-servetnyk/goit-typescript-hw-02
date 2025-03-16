import Modal from "react-modal";
import s from './ImageModal.module.css';
Modal.setAppElement("#root");

type Image = {
  id: string;
  urls: {
        regular: string;
    };
  alt_description: string;
}

type Props = {
    isOpen: boolean,
    onClose: () => void;
    img: Image | null
}

const ImageModal = ({ isOpen, onClose, img }: Props) => {
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