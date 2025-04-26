import ImageCard from "./ImageCard/ImageCard";
import css from './ImageGallery.module.css'
import { FC } from 'react';
import { Photo } from '../types/photo';
interface PhotosProps {
    photos: Photo[];
    onImageClick: (src: string) => void;
}

const ImageGallery: FC<PhotosProps> = ({ photos, onImageClick }) => {
    return (
        <ul className={css.gallery}>
        {photos.map((photo) => (
            <li key={photo.id} className={css.galleryItem}>
            <ImageCard
                photo={photo}
                onClick={() => onImageClick(photo.urls.regular)}
            />
            </li>
        ))}
        </ul>
    );
};

export default ImageGallery;