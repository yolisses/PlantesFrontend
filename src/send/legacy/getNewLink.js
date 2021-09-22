import {api} from '../../api/api';

export async function getNewLink(amount) {
  const res = await api.post('/graphql', {
    query: `{
        getPlantImageUploadLink
      }`,
  });
  return res.data.data.getPlantImageUploadLink;
}
