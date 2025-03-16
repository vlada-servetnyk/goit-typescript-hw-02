import s from './ImageCard.module.css'

type Image = {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
};

type Props = {
    image: Image,
    imgClick: (img: Image) => void
};

const ImageCard = ({ image, imgClick }: Props) => {

    const { alt_description, urls } = image;
    const linkImage = urls.small;
    return (
        <div className={s.thumb_img} onClick={() => imgClick(image)} >
            <img className={s.image} src={linkImage} alt={alt_description} />
        </div>
    )
};

export default ImageCard;