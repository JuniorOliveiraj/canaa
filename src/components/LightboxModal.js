import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import Carousel, { Modal, ModalGateway } from 'react-images';

LightboxModal.propTypes = {
  images: PropTypes.array.isRequired,
  photoIndex: PropTypes.number,
  setPhotoIndex: PropTypes.func,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default function LightboxModal({ images, photoIndex, setPhotoIndex, isOpen, onClose, ...other }) {
  console.log(setPhotoIndex, )
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const showIndex = <Typography variant="subtitle2">{`${photoIndex + 1} / ${images.length}`}</Typography>;

  return (
    <>
      {isOpen && (
        <ModalGateway>
          <Modal onClose={onClose}>
            <Carousel currentIndex={photoIndex} views={images} components={{ FooterCount: showIndex }} />
          </Modal>
        </ModalGateway>
      )}
    </>
  );
}
