interface ItemFormData {
  name: string;
  price?: string;
  amount?: string;
  images: Image[];
  tags: BooleansObj;
  description: string;
  availabilities: FormAvailabilities;
}

interface ItemInfo {
  name: string;
  swap: boolean;
  tags: string[];
  amount: number;
  donate: boolean;
  description: string;
  price: number | null;
}

interface SavedItem extends ItemInfo {
  _id: string;
  images: [string];
}

interface FormAvailabilities {
  swap?: boolean;
  sell?: boolean;
  donate?: boolean;
  price?: string;
}

interface Shipment {
  id: number;
  sent: boolean;
  images: Image[];
  itemInfo: ItemInfo;
  savedItem?: SavedItem;
  itemInfoSent: boolean;
  itemFormData: ItemFormData;
}

interface CreationRequest extends ItemInfo {
  imagesCount: number;
}

interface Image {
  sent: boolean;
  localUri: string;
  sendLink?: SendLink;
  remoteFileName?: string;
}

interface ImageKeepOperation {
  operation: ['keep'];
  uri: string;
}

interface ImageNewOperation {
  operation: ['new'];
}

type ImageEditOperation = ImageKeepOperation | ImageNewOperation;

type ListObj = {[key: string]: number};

type BooleansObj = {[key: string]: boolean};

type SavedItemId = string;

type SendLink = string;
