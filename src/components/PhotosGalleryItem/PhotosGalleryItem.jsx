import GridItem from '../GridItem/GridItem';
import styles from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ alt, src, avg_color, openModal }) => {
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
      >
        <img
          src={src.large}
          alt={alt}
          onClick={() => openModal(src.large, alt)}
        />
      </div>
    </GridItem>
  );
};

export default PhotosGalleryItem;
