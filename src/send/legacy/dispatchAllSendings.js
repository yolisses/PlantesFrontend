import {dispatchSending} from './dispatchSending';

export async function dispatchAllSendings(sendingsObj) {
  Object.entries(sendingsObj).map(async entry => {
    console.error(entry[0]);

    await dispatchSending(entry[1], () => {
      delete sendingsObj[entry[0]];
      console.error('aqui=<<', sendingsObj, entry[0]);
    });
  });
}
