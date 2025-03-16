import ImageCard from "../ImageCard/ImageCard";
import s from './ImageGallery.module.css'

type Image = {
    id: string;
    urls: {
        small: string;
    };
    alt_description: string;
};

type Props = {
    dataImages: Image[],
    imgClick: (img: Image) => void
}

const ImageGallery = ({dataImages, imgClick}: Props) => {
    return (
        <ul className={s.gallery}>
            {dataImages.map((item) => {
                return (<li className={s.gallery_item} key={item.id}>
                    <ImageCard image={item} imgClick={imgClick} />
                </li>)
            })}
        </ul>
    )
};

export default ImageGallery;