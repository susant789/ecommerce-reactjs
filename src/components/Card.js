import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    card:{
        margin:"10px 15px"
    }
})

export default function CardPack({product}) {

    const classes = useStyle()

  return (
    <Card className={classes.card} key={product._id} sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={product.image}
        
      />
      <CardContent mb={1}>
        <Typography width={200} height={50} gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Box display="flex" alignItems="center">
            <Typography flex={1} gutterBottom variant="h5" component="div">
            ${product.price}
            </Typography>
            <Button size="small">Add to cart</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
