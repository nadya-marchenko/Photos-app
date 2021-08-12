import React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Grid from '../../components/Grid';
import Input from '../../components/Input';
import { PageHeadline, PhotoHeadContainer, SearchRow } from './Photos.styled';
import SearchIcon from '@material-ui/icons/Search';
import Pagination from '../../components/Pagination';

const Photos = ({ images }) => 
    <>
        <PhotoHeadContainer>
            <PageHeadline>Your photos</PageHeadline>
            <SearchRow>
                <Input type='search' label='Search by title' id='search' icon={<SearchIcon />} />
                <Button color='default'>Search</Button>
            </SearchRow>
        </PhotoHeadContainer>
        <Grid col='4'>
            {images.map(image =>
                <Card key={image.id} url={image.url} title={image.title} col='4'/>
            )}
        </Grid>
        <Pagination activePage={1} pageNum={12} showedAmount={5} />
    </>;

export default Photos;