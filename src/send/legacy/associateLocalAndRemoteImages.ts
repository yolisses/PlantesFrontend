export function associateLocalAndRemoteImages(shipment: Shipment) {
  for (let i = 0; i < shipment.savedItem?.images.length; i++) {
    shipment.images[i].remoteFileName = shipment.savedItem?.images[i];
  }
}
