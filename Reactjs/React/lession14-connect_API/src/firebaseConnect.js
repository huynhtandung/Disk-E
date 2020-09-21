import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCuVCdw2JIyYyeBFMS8MU2GfxMHAAwDIEs",
  authDomain: "nodeproject-3467b.firebaseapp.com",
  databaseURL: "https://nodeproject-3467b.firebaseio.com",
  projectId: "nodeproject-3467b",
  storageBucket: "nodeproject-3467b.appspot.com",
  messagingSenderId: "74592436262",
  appId: "1:74592436262:web:2cca9fdb9bd53e0e"
};

export const firebaseConnect = firebase.initializeApp(firebaseConfig);

var data = firebase.database().ref('note1');
	data.once('value').then(function(snapshot){
		//console.log(snapshot.val());
	})