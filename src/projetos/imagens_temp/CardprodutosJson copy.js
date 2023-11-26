import PropTypes from 'prop-types';
import { Button, Box, styled } from '@mui/material';
import Iconify from '../../components/Iconify';

function ProductCard2({ productName, productImageUrl, amburger, sizeImg, onSelect, isSelected ,cardIndex}) {
    const handleCopyToClipboard = (url) => {
        navigator.clipboard.writeText(url);
    };
    const cardStyles = {
        minWidth: 300,
        minHeight: 300,
        margin: 6,
        borderRadius: 12,
        boxShadow: isSelected ? '2px 2px 5px rgba(0, 0, 0, 0.5)' : 'none',
        border: isSelected ? '5px solid red' : 'none',
    };

    //const fileName = pathArray[pathArray.length - 1];
    const modifiedUrl = productImageUrl.replace('1000x1000', sizeImg);
    return (
        <>

            <Imagen
                sx={{
                    backgroundImage: `url(${productName.endsWith('.psd') ? 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png' : modifiedUrl})`,
                    backgroundSize: '100%'
                }}
                // src={url.endsWith('.psd') ? 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png' : url}
                alt={`Slide ${productName}`}

                style={cardStyles}
                onClick={() => onSelect(cardIndex)}  // Adiciona a chamada para a função onSelect


            >
                <Box sx={{ width: '100%', display: 'flex', alignItems: "right", justifyContent: 'right', margin: '7px 7px 0px 0px' }}>
                    <ButtonIcon variant={'contained'} color="primary" onClick={() => handleCopyToClipboard(modifiedUrl)} >
                        <Iconify width={20} height={20} icon={'iconamoon:copy'} />
                    </ButtonIcon>

                    <ButtonIcon color="primary" variant='contained' onClick={() => window.open(`https://api-node-psi.vercel.app/mirante/dawloand?url=${modifiedUrl}`, '_blank')}  >
                        <Iconify width={20} height={20} icon={'mdi:downloads'} />
                    </ButtonIcon>
                </Box>

            </Imagen>


        </>
    );
}

const Imagen = styled(Box)(({ theme }) => ({
    animation: ' snowman 160ms alternate infinite ease-in-out',
    minWidth: 300,
    minHeight: 300,
    margin: 6,
    borderRadius: 12,
    boxShadow: theme.customShadows.z24,
}));
const ButtonIcon = styled(Button)(({ theme }) => ({
    animation: ' snowman 160ms alternate infinite ease-in-out',
    margin: 1,
    opacity: 0.5,
    "&:hover": {
        transition: ' ease-in all 0.2s',
        opacity: '0.8',
        transform: 'scale(1.02)',
    }
}));

ProductCard2.propTypes = {
    productName: PropTypes.string.isRequired,
    productImageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    amburger: PropTypes.any,
};
export default ProductCard2;