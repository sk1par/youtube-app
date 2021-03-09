export default interface IVideos {
    id: {
        kind: string;
        videoId: string;
    };
    snippet: {
        description: string;
        title: string;
        thumbnails: {
            medium: {
                url: string;
            }
        }
    };
}