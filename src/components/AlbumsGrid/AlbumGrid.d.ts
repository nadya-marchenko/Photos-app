import { AlbumsConfig } from "../../pages/Albums/Albums";

export interface AlbumGridValues {
    photos: AlbumsConfig[];
    cardsPerPage: number;
    currentPage: number;
}