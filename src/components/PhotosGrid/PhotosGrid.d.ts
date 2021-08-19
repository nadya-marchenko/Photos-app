import { PreviewPhotosConfig } from "../AlbumCard/AlbumCard";

export interface PhotosGridConfig {
    photos: PreviewPhotosConfig[];
    cardsPerPage: number;
    currentPage: number;
}