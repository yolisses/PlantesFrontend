import {brokenSendLink} from './brokenSendLink';
import {auth} from 'auth/auth';

export async function pushImage(image: Image) {
  const res = await fetch(image.sendLink, {
    method: 'PUT',
    body: {uri: image.localUri},
    headers: {
      'Content-Type': 'image/webp',
      'x-amz-meta-userId': '' + auth.user?.id,
    },
  });
  // console.error('s3 res', res);
  if (res.status === 200) {
    return;
  } else if (res.status === 403) {
    throw brokenSendLink;
  } else {
    throw 'Unknown error: ' + JSON.stringify(res);
  }
}
