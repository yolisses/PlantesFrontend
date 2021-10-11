interface ItemFormData {
    name: string,
    amount: number,
    description: string,
    tags: { string: boolean },
    images: { string: number },
    availabilities: FormAvailabilities,
}

interface ItemInfo {
    name: string,
    swap: boolean,
    tags: string[],
    amount: number,
    donate: boolean,
    description: string,
    price: number | null,
}

interface SavedItem extends ItemInfo {
    _id: string
    images: [string]
}

interface FormAvailabilities {
    swap: boolean
    price: number
    donate: boolean
}

interface Shipment {
    id: number
    sent: boolean
    images: Image[]
    itemInfo: ItemInfo
    savedItem?: SavedItem
    itemFormData: object
    itemInfoSent: boolean
}

interface CreationRequest extends ItemInfo {
    imagesCount: number
}

interface Image {
    sent: boolean
    localUri: string
    sendLink?: SendLink
}

type SavedItemId = string

type SendLink = string