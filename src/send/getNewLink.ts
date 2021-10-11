import { api } from "../api";

export async function getNewLink(plantId: SavedItemId, image: string): Promise<SendLink> {
    const res = await api.post('plant-image-upload-link', { plantId, image });
    return res.data;
}