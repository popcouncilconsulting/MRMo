import firebase from 'firebase';
// Required for side-effects
require('firebase/firestore');

const config = {
  apiKey: "AIzaSyC_V_jZiiYUwdC8GMddcHF-01LuRSnPD_Q",
  authDomain: "roomschedulerapp.firebaseapp.com",
  databaseURL: "https://roomschedulerapp-default-rtdb.firebaseio.com",
  projectId: "roomschedulerapp",
  storageBucket: "roomschedulerapp.appspot.com",
  messagingSenderId: "286716615951",
  appId: "1:286716615951:web:9e55d84489e822bd91f27a"
};

firebase.initializeApp(config);

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';
export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;
export const minTime = new Date();
minTime.setHours(9, 0, 0);
export const maxTime = new Date();
maxTime.setHours(19, 0, 0);
export const calendarInitialState = {
  events: [],
  equipments: [],

  events_Manthan: [],
  equipments_Manthan: [],

  events_Aravali: [],
  equipments_Aravali: [],

  events_Saptagiri: [],
  equipments_Saptagiri: [],

  events_Vindhyanchal: [],
  equipments_Vindhyanchal: [],
  
  modal: {
    id: null,
    ownerId: null,
    title: null,
    desc: null,
    start: new Date(2021, 4, 4, 7, 0, 0),
    end: new Date(2021, 4, 4, 8, 0, 0),
    company: '@pc',
    room: null,
    user: null,
  },
  modalOpen: false,
  equipmentsOpen: false,
  peopleOpen: false,

}
