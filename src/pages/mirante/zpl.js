import { useState, useCallback } from 'react';
import axios from 'axios';
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
import React, { useEffect } from 'react';
const RootStyle = styled(Page)(({ theme }) => ({
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(15)
}));



export default function ZplView() {
    const [preview, setPreview] = useState(false);
    const [files, setFiles] = useState([]);
    const [age, setAge] = useState('20');
    console.log(files)
    useEffect(() => {
        async function fetchData() {
          try {
            for (const file of files) {
              const response = await fetch(file.path);
              const text = await response.text();
              console.log(text);
              // Você pode fazer o que quiser com o texto aqui, como armazená-lo em um estado ou processá-lo de alguma forma.
            }
          } catch (error) {
            console.error('Erro ao carregar o arquivo:', error);
          }
        }
    
        fetchData();
      }, [files])


    const handleLabelaryRequest = async () => {
        try {
            const zplArray = [
                "^xa^cfa,50^fo100,200^fdHello World 2^fs^xz",
                `
                                ^XA

                ^FX Top section with logo, name and address.
                ^CF0,60
                ^FO50,50^GB100,100,100^FS
                ^FO75,75^FR^GB100,100,100^FS
                ^FO93,93^GB40,40,40^FS
                ^FO220,50^FDIntershipping, Inc.^FS
                ^CF0,30
                ^FO220,115^FD1000 Shipping Lane^FS
                ^FO220,155^FDShelbyville TN 38102^FS
                ^FO220,195^FDUnited States (USA)^FS
                ^FO50,250^GB700,3,3^FS

                ^FX Second section with recipient address and permit information.
                ^CFA,30
                ^FO50,300^FDJohn Doe^FS
                ^FO50,340^FD100 Main Street^FS
                ^FO50,380^FDSpringfield TN 39021^FS
                ^FO50,420^FDUnited States (USA)^FS
                ^CFA,15
                ^FO600,300^GB150,150,3^FS
                ^FO638,340^FDPermit^FS
                ^FO638,390^FD123456^FS
                ^FO50,500^GB700,3,3^FS

                ^FX Third section with bar code.
                ^BY5,2,270
                ^FO100,550^BC^FD12345678^FS

                ^FX Fourth section (the two boxes on the bottom).
                ^FO50,900^GB700,250,3^FS
                ^FO400,900^GB3,250,3^FS
                ^CF0,40
                ^FO100,960^FDCtr. X34B-1^FS
                ^FO100,1010^FDREF1 F00B47^FS
                ^FO100,1060^FDREF2 BL4H8^FS
                ^CF0,190
                ^FO470,955^FDCA^FS

                ^XZ
                `
                // Adicione mais ZPLs conforme necessário
            ];

            const options = {
                headers: { 'Accept': 'application/pdf' },
                responseType: 'arraybuffer'
            };

            for (let i = 0; i < zplArray.length; i++) {
                const response = await axios.post(
                    'http://api.labelary.com/v1/printers/8dpmm/labels/4x6/0/',
                    zplArray[i],
                    options
                );

                const blob = new Blob([response.data], { type: 'application/pdf' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `label_${i + 1}.pdf`; // Define o nome do arquivo com base no índice
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            }

        } catch (error) {
            console.error('Erro ao solicitar etiquetas:', error.message);
        }
    };


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
                                    <LoadingButton type="submit" variant="contained" /*loading={isSubmitting}*/ onClick={handleLabelaryRequest}>
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