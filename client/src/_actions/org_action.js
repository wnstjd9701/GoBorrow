import axios from 'axios';
import { POST_PRODUCT_ITEM } from './action_type.js';

export async function postPorudctItem(dataToSubmit) {
  const request = await axios.post('/app/organizations/product/item', dataToSubmit).then(response => response.data);
  return {
    type: POST_PRODUCT_ITEM,
    payload: request,
  };
}
