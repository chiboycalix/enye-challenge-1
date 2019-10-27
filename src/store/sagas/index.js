import { fork, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga'
import { watchCreateUser } from '../user/user.data';
// import { watchGetUser } from '../user/user.data';
import database from '../../Config/firebaseConfig';
import addUserRequest from '../user/actions';


function* startListener() {
    // #1
    const channel = new eventChannel(emiter => {
      const listener = database.ref("users").on("child_added", snapshot => {
        emiter({ data: snapshot.val() || {} });
      });
  
          // #2
      return () => {
        listener.off();
      };
    });
  
      // #3
    while (true) {
      const { data } = yield take(channel);
          // #4
      yield put(addUserRequest.addUserSuccess(data));
    }
  }
  
  export default function* root() {
    yield fork(startListener);
    yield fork(watchCreateUser);
  }






// import { fork, call, put, take } from 'redux-saga/effects';
// import { eventChannel } from 'redux-saga'
// import firebase from 'firebase';
// import { ADD_USER, addUser } from '../user/actions';

// import { firebaseConfig } from '../../Config/firebaseConfig';


// const app = firebase.initializeApp(firebaseConfig);
// const database = app.database()

// function insert({user}){
//     const newUser = database.ref('users').push()
//     return newUser.set(user)
// }

// function createEventChannel(){
//     const listener = eventChannel(emit => {
//         database.ref('users')
//             .on('child_added', data => emit(data.val()));
//             return () => database.ref('users').off(listener);
//     })
//     return listener;
// }

// function* updatedUserSaga(){
//     const updateChannel = createEventChannel();
//     while(true){
//         const user = yield take(updateChannel)
//         yield put(addUser(user))
//     }
// }

// function* createUserSaga(){
//     const action = yield take(ADD_USER)
//     const { user } = action;
//     try {
//         yield call(insert, user)
//     } catch (error) {
        
//     }
// }

// export default function* rootSaga(){
//     yield fork(createUserSaga);
//     yield fork(updatedUserSaga)
// }
