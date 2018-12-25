import { getShopList } from '@/services/api';

export default {
    namespace: 'shop',
  
    state: {
        list: []
    },
  
    effects: {
      *getList(action, { call, put }) {
        const response = yield call(getShopList);
        console.log('response...',response.data.list)
        yield put({
          type: 'save',
          payload: response.data.list,
        });
      }
    },
  
    reducers: {
      save(state, action) {
        return {
          ...state,
          list: action.payload,
        };
      },
    },
  };
  