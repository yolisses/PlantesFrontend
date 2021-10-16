interface ItemFormData {
  name: string;
  amount: string;
  description: string;
  tags: {string: boolean};
  images: {[key: string]: Image};
  availabilities: FormAvailabilities;
}

interface ItemInfo {
  name: string;
  swap: boolean;
  tags: string[];
  donate: boolean;
  images: string[];
  price: number | null;
  amount: number | null;
  description: string | null;
}

interface SavedItem extends ItemInfo {
  _id: string;
  images: [string];
}

interface FormAvailabilities {
  swap: boolean;
  price: number;
  donate: boolean;
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
  index: number;
  localUri: string;
  sendLink?: string;
  remoteUri?: string;
}

type SavedItemId = string;

type SendLink = string;

interface ImageKeepOperation {
  operation: ['keep'];
  uri: string;
}

interface ImageNewOperation {
  operation: ['new'];
}

type ImageEditOperation = ImageKeepOperation | ImageNewOperation;

type ListObj = {[key: string]: number};

type ImagesObj = {[key: string]: Image};

interface UploadInfo {
  sendLink: string;
  remoteUri: string;
}
