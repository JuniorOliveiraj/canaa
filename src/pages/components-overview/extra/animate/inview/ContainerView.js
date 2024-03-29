import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
// material
import { Box, Paper } from '@mui/material';
// components
import { TextAnimate, MotionContainer } from '../../../../../components/animate';
//
import getVariant from '../getVariant';

// ----------------------------------------------------------------------

const IMG = [
  'https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_2.jpg',
  'https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_3.jpg',
  'https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_4.jpg',
  'https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_5.jpg',
  'https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_6.jpg'
];

ContainerView.propTypes = {
  isText: PropTypes.bool,
  isMulti: PropTypes.bool,
  selectVariant: PropTypes.string
};

export default function ContainerView({ isText, isMulti, selectVariant, ...other }) {
  const items = isMulti ? IMG : IMG.slice(0, 1);

  return (
    <Paper
      sx={{
        p: 3,
        minHeight: 480,
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.neutral'
      }}
      {...other}
    >
      {isText ? (
        <MotionContainer open initial="initial">
          <TextAnimate text="Minimals" variants={getVariant(selectVariant)} />
        </MotionContainer>
      ) : (
        <MotionContainer open initial="initial">
          {items.map((row, index) => (
            <Box
              key={index}
              component={motion.img}
              src={row}
              variants={getVariant(selectVariant)}
              sx={{
                my: 2,
                width: 480,
                borderRadius: 1,
                objectFit: 'cover',
                height: isMulti ? 72 : 320,
                boxShadow: (theme) => theme.customShadows.z8
              }}
            />
          ))}
        </MotionContainer>
      )}
    </Paper>
  );
}
