import React from 'react';
import Card from '../../components/Card';
import Grid from '../../components/Grid';
import { PageHeadline } from './Photos.styled';

const Photos = ({ images }) => 
    <>
        <PageHeadline>Your photos</PageHeadline>
        <Grid col='4'>
            {images.map(image =>
                <Card key={image.id} url={image.url} title={image.title} col='4'/>
            )}
        </Grid>
    </>;

export default Photos;