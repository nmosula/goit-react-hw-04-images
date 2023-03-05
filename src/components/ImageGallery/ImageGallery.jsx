import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styled';

function ImageGallery({ images }) {
        
        return (
            <List>

                {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        tags={tags}
                    />
                ))}
            </List>
        )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ImageGallery;