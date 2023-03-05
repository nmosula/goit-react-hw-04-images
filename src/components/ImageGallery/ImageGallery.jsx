import { Component } from 'react';
import { getImages } from 'services/getImages';
import { List } from './ImageGallery.styled';

class ImageGallery extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchText !== this.props.searchText) {
            try {
                const { images, totalImages } = getImages(this.props.searchText, this.props.page);
                console.log(images);
                console.log("totalImg=", totalImages);
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    render() {
        return (
            <List>
                {/* {this.props.images} */}
            </List>
        )
    }
}

export default ImageGallery;