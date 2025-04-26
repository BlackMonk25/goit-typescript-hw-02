import css from './ImageCard.module.css'
import { Photo } from '../../types/photo';



type PhotoProps = {
    photo: Photo;
    onClick: () => void;
};

export default function ImageCard({photo, onClick}: PhotoProps){
    return (
        <div onClick={onClick} className={css.imgageCard}>
            <img src={photo.urls.small} alt={photo.description} />
        </div>
);
}