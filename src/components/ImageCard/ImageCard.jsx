import s from './ImageCard.module.css'

const ImageCard = ({ image, imgClick }) => {

    const { alt_description, urls } = image;
    const linkImage = urls.small;
    return (
        <div className={s.thumb_img} onClick={() => imgClick(image)} >
            <img className={s.image} src={linkImage} alt={alt_description} />
        </div>
    )
};

export default ImageCard;