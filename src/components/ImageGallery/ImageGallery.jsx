import ImageCard from "../ImageCard/ImageCard";
import s from './ImageGallery.module.css'

const ImageGallery = ({dataImages}) => {
    return (
        <ul className={s.gallery}>
            {dataImages.map((item) => {
                return (<li className={s.gallery_item} key={item.id}>
                    <ImageCard image={item} />
                </li>)
            })}
        </ul>
    )
};

export default ImageGallery;