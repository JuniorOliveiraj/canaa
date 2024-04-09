import { useState, useCallback } from 'react';
// material
import { styled } from '@mui/material';
import {
    Box,
    Card,
    Grid,
    Stack,
    Switch,
    Select,
    MenuItem,
    Container,
    CardHeader,
    Typography,
    InputLabel,
    FormControl,
    CardContent,
    FormControlLabel
} from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
import { LoadingButton } from '@mui/lab';
// utils
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { UploadMultiFile } from '../../components/upload';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(15)
}));


export default function ZplView() {
    const [preview, setPreview] = useState(false);
    const [files, setFiles] = useState([]);
    const [age, setAge] = useState('20');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleDropMultiFile = useCallback(
        (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            );
        },
        [setFiles]
    );

    const handleRemoveAll = () => {
        setFiles([]);
    };

    const handleRemove = (file) => {
        const filteredItems = files.filter((_file) => _file !== file);
        setFiles(filteredItems);
    };

    return (
        <RootStyle title="Imprimir etiquetas | Juniors">
            <Box
                sx={{
                    pt: 6,
                    pb: 1,
                    mb: 10,
                    bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
                }}
            >
                <Container maxWidth="lg">
                    <HeaderBreadcrumbs
                        heading="Imprimir etiquetas "
                        links={[{ name: 'Mirante', href: PATH_PAGE.mirante }, { name: 'Imprimir etiquetas' }]}
                        moreLink="https://www.lojamirante.com.br/"
                    />
                </Container>
            </Box>

            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ p: 3 }}>
                            <Stack spacing={3} >
                                <Box>
                                    <FormControl fullWidth>
                                        <InputLabel id="Size">Tamanho da etiqueta</InputLabel>
                                        <Select
                                            labelId="Proporcao"
                                            id="Proporcao"
                                            value={age}
                                            label="Proporcao"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>4x6</MenuItem>
                                            <MenuItem value={20}>1x1</MenuItem>
                                            <MenuItem value={30}>9x5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box marginTop={8}>
                                    <FormControl fullWidth marginTop={8}>
                                        <InputLabel id="Size">Denciade de Pixeis</InputLabel>
                                        <Select
                                            labelId="DencidadeP"
                                            id="DencidadeP"
                                            value={age}
                                            label="DencidadeP"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>6 dpmm (152 dpi)</MenuItem>
                                            <MenuItem value={20}>8 dpmm (203 dpi)</MenuItem>
                                            <MenuItem value={30}>12 dpmm (300 dpi)</MenuItem>
                                            <MenuItem value={40}>24 dpmm (600 dpi)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box marginTop={8}>
                                    <LoadingButton type="submit" variant="contained" /*loading={isSubmitting}*/>
                                        Save Changes
                                    </LoadingButton>
                                </Box>
                            </Stack>
                            <Stack spacing={3}>
                                <Card>
                                    <CardHeader
                                        title="Upload Multi File"
                                        action={
                                            <FormControlLabel
                                                control={<Switch checked={preview} onChange={(event) => setPreview(event.target.checked)} />}
                                                label="Show Preview"
                                            />
                                        }
                                    />
                                    <CardContent>
                                        <UploadMultiFile
                                            showPreview={preview}
                                            files={files}
                                            onDrop={handleDropMultiFile}
                                            onRemove={handleRemove}
                                            onRemoveAll={handleRemoveAll}
                                        />
                                    </CardContent>
                                </Card>
                            </Stack>

                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ p: 3 }}>
                            <Stack spacing={3}>
                                <Typography>Ola</Typography>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );

}