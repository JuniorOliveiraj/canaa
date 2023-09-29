
// material
import { Typography, styled, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
    Container,
    Card,
    CardContent,
} from '@mui/material';
//

// ----------------------------------------------------------------------
const ContentStyle = styled('div')(({ theme }) => ({
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(3.5),

}));

// ----------------------------------------------------------------------

export default function CategoryToo() {
    return (
        <Container maxWidth="lg" sx={{ position: 'relative', height: '100%', marginTop: 10, marginBottom: 10 }}>
            <ContentStyle>
                {category.map((categoryGroup, index) => (
                    <CardsCategory {...categoryGroup} key={index} />
                ))}
            </ContentStyle>
        </Container>
    );
}


function CardsCategory(categoryGroup) {
    return (
        <Card sx={{
            width: 160,
            maxWidt: 220,
            hminWidth: 160,
            margin: 0,
            '&:hover': {
                opacity: 0.5
            }
        }}>
            <Link
                to={`${categoryGroup.text}`}
                color="inherit"
                variant="subtitle2"
                underline="hover"
                component={RouterLink}

            >


                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={categoryGroup.img} alt="Category" />
                    <Typography variant="h5" component="div">
                        {categoryGroup.text}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    )
}


const category = [
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f995f098fc574d0e0b1e6b_icon-large-inspiration.svg",
        "text": "Inspiration"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f995e6961ef4f65c73b0d6_icon-large-illustrations.svg",
        "text": "Illustrations"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f9960ec1a16d5f19256fc3_icon-large-icons.svg",
        "text": "Icons"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f99603f04a37629085b639_icon-large-mockups.svg",
        "text": "Mockups + Kits"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f9961855f0fb7087ffe6f9_icon-large-typography.svg",
        "text": "Typography"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f995d93a878df6acc47c16_icon-large-photos.svg",
        "text": "Stock Photos"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f9947df54d73e11603dc0d_icon-large-learning.svg",
        "text": "Learning"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f995c86f3ac496d47921b0_icon-large-blogs.svg",
        "text": "Blogs"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f995ae008a5abb5f6c1837_icon-large-podcasts.svg",
        "text": "Podcasts"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f995b822d8e4dc79eeb2cf_icon-large-books.svg",
        "text": "Books"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f993ea6f3ac4060f791468_icon-large-accessibility.svg",
        "text": "Accessibility"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f993f35e7f6bd656c9e6e7_icon-large-community.svg",
        "text": "Community"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f9959e23e94abba99bbf00_icon-large-design.svg",
        "text": "Design Tools"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f9958b6f3ac43211792137_icon-large-ux.svg",
        "text": "UX Tools"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f99580c6a29213bc5b48a3_icon-large-color.svg",
        "text": "Color Tools"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f9948d37d9a36b1d75d31b_icon-large-remote.svg",
        "text": "Project Tools"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/636a872a4c77747664650289_icon-large-ai.svg",
        "text": "AI Tools"
    },
    {
        "img": "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/61f99573fdb844220b4fa6eb_icon-large-development.svg",
        "text": "Website Builder"
    }
]
