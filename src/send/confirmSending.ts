import { api } from "../api";

export async function confirmSending(plantId: SavedItemId) {
    return await api.post('confirm-plant-sending', { plantId });
}