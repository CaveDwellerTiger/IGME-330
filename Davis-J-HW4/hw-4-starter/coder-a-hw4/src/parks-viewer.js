// Only to be used by favorite-parks-viewer.html
// TODO: ADD YOUR imports and Firebase setup code HERE
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
    import { getDatabase, ref, set, push, onValue, increment} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: ,
    authDomain: "state-park-favorites.firebaseapp.com",
    projectId: "state-park-favorites",
    storageBucket: "state-park-favorites.firebasestorage.app",
    messagingSenderId: "928300025992",
    appId: "1:928300025992:web:8ec5a6330d5a967225b73d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const favoritesList = document.querySelector("#favoritesList");

const writeFavNameData = (name, id) => {
  const db = getDatabase();
  const favRef = ref(db, 'favorites/' + name);
  set(favRef, {
      name,
      id,
      likes: increment(1)
  });
};

const favoritesChanged = (snapshot) => {
  // TODO: clear #favoritesList
  favoritesList.innerHTML = "";
  snapshot.forEach(fav => {
    const childKey = fav.key;
    const childData = fav.val();
    console.log(childKey,childData);
    // TODO: update #favoritesList
    favoritesList.innerHTML += `<li><b>${childData.name}</b> <b>(${childData.id})</b> - Likes: ${childData.likes}</li>`;
  });
};

const init = () => {
  const db = getDatabase();
  const favoritesRef = ref(db, 'favorites/');
  onValue(favoritesRef,favoritesChanged);
	
//   btnSubmit.onclick = () => {
//     writeFavNameData(nameField.value);
//   };
};

init();

export {writeFavNameData};