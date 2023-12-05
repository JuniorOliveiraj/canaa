import HeroDesignToo from "../components/_external-pages/designToo/HeroDesignToo"
import Page from "../components/Page"
import CategoryToo from "../components/_external-pages/designToo/categoryToo"
import { Container } from "@mui/material"
import useSettings from "../hooks/useSettings"
const metaAndTags = {
    meta_title: "Junior Oliveira - Ferramentas de designer",
    meta_description:
      "Descubra as ferramentas de design mais úteis que todo designer precisa. Essas ferramentas ajudarão você a criar designs incríveis, seja você um designer iniciante ou experiente.       ",
    meta_tags: "react,ferramentas de design, designer, UX design, UI design, prototipagem, colaboração, colaboração remota, design para dispositivos móvei, design para web, application, dashboard, junior oliveira, junior belem , belem, canaa, app react , junior react, belem junior, junior belem,"
  }
export default function DesignToo() {
    const { themeStretch } = useSettings();
    return (
        <Page title="ferramentas de design  | portifolio" id="move_top" meta={ metaAndTags}>
            <HeroDesignToo />
            <Container  maxWidth={themeStretch ? false : 'xl'}>
                <CategoryToo />
            </Container>
        </Page>
    )
}