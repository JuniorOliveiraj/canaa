import { Typography, CardContent, CardActions, Card, Link } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
 
 

function CardToos(children, { productName, productImageUrl, }) {
    const { title, payment, subTitle, img , url} = children;
    return (
        <Link
        href={url}
        target='_blanck'
        >
           <Card sx={{ cursor: "pointer", height:'100%', minHeight:370 }}>
                <CardMedia
                    component="img"
                    sx={{ width: '100%',minHeight:120}}
                    image={img}
                    alt="Live from space album cover"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {subTitle}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Typography   color="textSecondary" component="p" sx={{backgroundColor:payment ==='Free' ?"#eaf9e3" : "#f8f7d6", borderRadius:2, padding:0.8, margin:1 }}>
                        {payment}
                    </Typography>
                </CardActions>
            </Card>

        </Link>
    );
}
export default CardToos;