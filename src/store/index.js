import {createStore, action} from 'easy-peasy';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const storeModel = {
  Todos: {
    ids: 0,
    tasks: [],
    addTask: action((state, payload) => {
      state.tasks.push({
        id: state.ids++,
        value: payload,
        isCompleted: false,
      });
    }),

    changeStatus: action((state, payload) => {
      state.tasks[payload].isCompleted = !state.tasks[payload].isCompleted;
    }),

    removeTask: action((state, payload) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload.id);
    }),
  },
};

const store = createStore(storeModel, {
  name: 'root',
  devTools: true,
  reducerEnhancer: (reducer) =>
    persistReducer(
      {
        key: 'root',
        storage: AsyncStorage,
        timeout: null,
      },
      reducer,
    ),
});

const persistor = persistStore(store);

export {store, persistor};
