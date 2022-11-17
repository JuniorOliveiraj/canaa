import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Avatar, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: ' center',
    flexWrap: 'wrap',
    color: theme.palette.text.secondary,
    margin: 10,
}));
const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body,
    padding: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    color: theme.palette.text.secondary,
    justifyContent: ' right',
    margin: 10,
}));
const AvatarStyle = styled(Avatar)(({ theme, matches }) => ({
    zIndex: 9,
    width: 150,
    height: 150,
    margin: 10,
    border: '3px solid #ffffff',

}));
const Descrition = styled('p')(({ theme }) => ({
    maxWidth: '50%',
    fontSize: '1em',
    margin: 10,
}));
export default function EditarPerfil() {
    const [imagens, setImagens] = useState(null)
    const [urlimage, setUrlimage] = useState(null)
    const matches = useMediaQuery('(min-width:900px)');
    function onImageChange(e) {
        setImagens([...e.target.files])
    }

    // useEfect(() => {
    //     if (imagens.length < 1) return;
    //     const newImageUrl = []
    //     imagens.forEach(image => newImageUrl.push(URL.createObjectURL(image)));
    //     setUrlimage(newImageUrl);
    // }, [imagens])


    useEffect(() => {
        try {
            if (imagens !== null) {
                const newImageUrl = []
                imagens.forEach(image => newImageUrl.push(URL.createObjectURL(image)));
                setUrlimage(newImageUrl);
            }
        } catch (error) {
            console.log(error)
        }

    }, [imagens]);
    console.log(urlimage)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={matches ? 6 : 22} md={4} >
                    <Item sx={{
                        paddingTop: 10,
                        paddingBottom: 10
                    }}>
                        <Typography variant="h4" >

                        </Typography>
                        <AvatarStyle
                            alt="teste junior"
                            src={urlimage ? urlimage[0] : "https://media-exp1.licdn.com/dms/image/C4D03AQHcbFe9-Phe1Q/profile-displayphoto-shrink_200_200/0/1656433703054?e=1674086400&v=beta&t=R3JO2gZg4qI9gBV7PLAt1pYB8HS7xn_MSoyWInSjYC0"}
                        />
                        <input type="file" multiple accept="image/*" onChange={onImageChange} />
                        <Descrition maxWidth="50%" backgroundColor="red">
                            Allowed *.jpeg, *.jpg, *.png, *.gif
                            max size of 3.1 MB
                        </Descrition>
                    </Item>
                </Grid>
                <Grid xs={matches ? 6 : 22} md={8}>
                    <Item2
                        sx={{
                            paddingTop: 5,
                            paddingBottom: 5

                        }}>
                        <Item>
                            <Paper
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1.5, width: '30ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    //helperText="Please enter your name"
                                    // fullWidth
                                    id="outlined-name"
                                    label="Name"
                                //  onChange={e => setUserName(e.target.value)}
                                // value={UserName}
                                />
                                <TextField
                                    id="outlined-name"
                                    label="sobrenome"
                                // onChange={e => setUserRole(e.target.value)}
                                // value={userRole}
                                />
                                <TextField
                                    //helperText="Please enter your name"
                                    // fullWidth
                                    id="outlined-emal"
                                    label="email"
                                //  onChange={e => setUserName(e.target.value)}
                                // value={UserName}
                                />
                                <TextField
                                    id="outlined-fone"
                                    label="telefone"
                                // onChange={e => setUserRole(e.target.value)}
                                // value={userRole}
                                />
                                <TextField
                                    //helperText="Please enter your name"
                                    // fullWidth
                                    id="outlined-comunity"
                                    label="comunity"
                                //  onChange={e => setUserName(e.target.value)}
                                // value={UserName}
                                />
                                <TextField
                                    id="outlined-Role"
                                    label="Role"
                                // onChange={e => setUserRole(e.target.value)}
                                // value={userRole}
                                />
                            </Paper>
                        </Item>
                        <Button variant="contained" sx={{
                            float: 'left',
                            width: '15ch',
                            margin: 3,
                        }}>
                            Update
                        </Button>
                    </Item2>
                </Grid>
            </Grid>
        </Box>
    );
}
