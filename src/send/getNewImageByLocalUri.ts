export function getNewImageByLocalUri(localUri: string): Image {
    return {
        localUri,
        sent: false,
    }
}
