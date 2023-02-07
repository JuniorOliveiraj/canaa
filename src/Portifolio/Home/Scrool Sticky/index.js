import { Main, Section, Sticky } from "./styles/index"
import FirstAndSecond from "./components";
function ScrollSticky(params) {
    return (
        <>
            <Main sx={{ height: "1610vh" }}>

                <Section style={{ height: '72.7%', }}>
                    <FirstAndSecond />
                </Section>

                <Section style={{ height: '9.7%', }}>
                    <Sticky className='third'  style={{position: 'sticky'}}/>
                </Section>

                <Section style={{ height: '10.1%', }}>
                    <Sticky className="fourht"  style={{position:'sticky'}}/>
                </Section>
            </Main>
        </>
    )
}
export default ScrollSticky;