import HeroDesignToo from "../components/_external-pages/designToo/HeroDesignToo"
import Page from "../components/Page"
import CategoryToo from "../components/_external-pages/designToo/categoryToo"
import { Container } from "@mui/material"
export default function DesignToo() {
    return (
        <Page title="ferramentas de design  | portifolio" id="move_top">
            <HeroDesignToo />
            <Container>
                <CategoryToo />
            </Container>
        </Page>
    )
}