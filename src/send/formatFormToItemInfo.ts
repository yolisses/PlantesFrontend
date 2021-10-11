import { getTrueValuedKeys } from "../common/getTrueValuedKeys"

export function formatFormToItemInfo(itemFormData: ItemFormData): ItemInfo {
    const { name, availabilities, tags: tagsObj, description, amount } = itemFormData
    const { donate, swap, price } = availabilities
    const tags = getTrueValuedKeys(tagsObj)

    const result = {
        name,
        swap,
        tags,
        amount,
        description,
        price: price || null,
        donate: donate ? true : false,
    }
    return result
}
