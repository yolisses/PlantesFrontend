const getLinkError = 'getLinkError';

async function getNewLink(image) {
  //image just for debug
  if (Math.random() > 0.7) {
    const link = 'xyz' + Math.random();
    console.error('link obtained for: ', image.localUri);
    return link;
  } else {
    console.error('error on get link: ', image.localUri);
    throw getLinkError;
  }
}

async function waitSomeTime() {
  return new Promise((resolve, reject) => setTimeout(() => resolve(true), 100));
}

const connectionError = 'connectionError';
const brokenSendLink = 'brokenSendLink';
const sendPlantError = 'sendPlantError';

async function sendImage(image) {
  if (Math.random() > 0.5) {
    console.error('image sent:', image.localUri);
    image.sent = true;
  } else {
    image.sent = false;
    if (Math.random() > 0.5) {
      throw connectionError;
    } else {
      throw brokenSendLink;
    }
  }
}

async function dispatchImage(image) {
  return new Promise(async (resolve, reject) => {
    while (true) {
      if (image.sent) {
        return resolve(true);
      } else if (!image.sendLink) {
        try {
          const link = await getNewLink(image);
          image.sendLink = link;
        } catch (err) {
          await waitSomeTime();
        }
      } else {
        try {
          await sendImage(image);
        } catch (err) {
          console.error('error sending image: ', image.localUri, err);
          if (err === connectionError) {
            await waitSomeTime();
          } else if (err === brokenSendLink) {
            image.sendLink = false;
          }
        }
      }
    }
  });
}

async function dispatchAllImages(images) {
  return await Promise.all(images.map(image => dispatchImage(image)));
}

async function sendPlant() {
  if (Math.random() > 0.7) {
  } else {
    throw sendPlantError;
  }
}

async function dispatchPlant(plant) {
  return new Promise(async (resolve, reject) => {
    while (true) {
      try {
        await sendPlant(plant);
        console.error('plant sent: ', plant.name);
        return resolve(true);
      } catch (err) {
        console.error('error sending plant: ', plant.name, err);
        await waitSomeTime();
      }
    }
  });
}

async function dispatchSending(sending, callback) {
  const images = sending.images.map(localUri => {
    return {localUri};
  });
  // await required to mutate images
  await dispatchAllImages(images);
  const resultImages = images.map(image => image.sendLink);
  console.error(resultImages);
  sending.images = resultImages;
  await dispatchPlant(sending);
  console.error('callback');
  callback();
  return;
}

const sending1 = {
  name: 'macaxeira',
  price: 10,
  sell: true,
  swap: true,
  images: ['file://macaxeira1', 'file://macaxeira2', 'file://macaxeira3'],
};

const sending2 = {
  name: 'cedro',
  price: 10,
  sell: true,
  swap: true,
  images: ['file://cedro1', 'file://cedro2', 'file://cedro3'],
};

const sending3 = {
  name: 'mamão',
  price: 10,
  sell: true,
  swap: true,
  images: ['file://mamão1', 'file://mamão2', 'file://mamão3'],
};

// dispatchSending(sending);

// async function dispatchAllSendings(sendings) {
//   return await Promise.all(sendings.map(sending => dispatchSending(sending)));
// }

async function dispatchAllSendings(sendingsObj) {
  Object.entries(sendingsObj).map(async entry => {
    console.error(entry[0]);

    await dispatchSending(entry[1], () => {
      delete sendingsObj[entry[0]];
      console.error('aqui=<<', sendingsObj, entry[0]);
    });
  });
}

const sendings = {
  123: sending1,
  456: sending2,
  789: sending3,
};

dispatchAllSendings(sendings);
