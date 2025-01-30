import s from './ImageCard.module.css'

const ImageCard = ({ image }) => {

    const { alt_description, urls } = image;
    const linkImage = urls.small;
    return (
        <div className={s.thumb_img}>
            <img className={s.image} src={linkImage} alt={alt_description} />
        </div>
    )
};

export default ImageCard;