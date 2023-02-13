

import { useMemo } from 'react';
// theme.palette.background.paper

// material
//
import palette from './DarkMOde';
import typography from '../typography';
import shadows, { customShadows } from '../shadows';


export function ThemeDark (){
     const themeOptionsDark = useMemo(
        () => ({
            palette,
            shape: { borderRadius: 8 },
            typography,
            shadows,
            customShadows,
        }),
        []
    );
    return themeOptionsDark;
    
}
