import PropTypes from 'prop-types';
import Iconify from '../../Iconify';
import { useState } from 'react';
// material
import { Box, Chip, Avatar, AvatarGroup, FormControlLabel, Checkbox } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

BlogPostTags.propTypes = {
  post: PropTypes.object.isRequired,
  sx: PropTypes.object
};
export default function BlogPostTags({ post, sx }) {
  const { favorite, tags, favoritePerson, like } = post;
  const [isChecked, setIsChecked] = useState(like);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }
  return (
    <Box sx={{ py: 3, ...sx }}>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} sx={{ m: 0.5 }} />
      ))}

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked} 
              onChange={handleCheckboxChange} 
              size="small"
              color="error"
              icon={<Iconify icon={'mdi:heart'} width={20} height={20} />}
              checkedIcon={<Iconify icon={'mdi:heart'} width={20} height={20} />}
            />
          }
          label={fShortenNumber(favorite)}
        />
        <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
          {favoritePerson.map((person) => (
            <Avatar key={person.name} alt={person.name} src={person.avatarUrl} />
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  );
}
