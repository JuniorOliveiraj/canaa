import HeroDesignToo from "../components/_external-pages/designToo/HeroDesignToo"
import Page from "../components/Page"
import CategoryToo from "../components/_external-pages/designToo/categoryToo"
import { Container } from "@mui/material"
import useSettings from "../hooks/useSettings"
export default function DesignToo() {
    const { themeStretch } = useSettings();
    return (
        <Page title="ferramentas de design  | portifolio" id="move_top">
            <HeroDesignToo />
            <Container  maxWidth={themeStretch ? false : 'xl'}>
                <CategoryToo />
            </Container>
        </Page>
    )
}