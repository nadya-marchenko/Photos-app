import { PreviewPhotosConfig } from "../AlbumCard/AlbumCard";

export interface AlbumGridValues {
    photos: PreviewPhotosConfig[];
    cardsPerPage: number;
    currentPage: number;
}