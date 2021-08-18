export interface PreviewPhotosConfig {
    albumId?: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
    userId?: number;
};

export interface AlbumValues {
    link: string;
    title: string;
    previewPhotosNum: number,
    albumId: number,
};