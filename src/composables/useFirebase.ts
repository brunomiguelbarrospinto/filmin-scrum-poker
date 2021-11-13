import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

let app: any;
let database: any;
const firebaseConfig = {
  databaseURL:
    "https://filmin-scrum-poker-default-rtdb.europe-west1.firebasedatabase.app/",
};
const useFirebase = (): any => {
  function init() {
    app = initializeApp(firebaseConfig);
    database = getDatabase(app);
  }

  return {
    app,
    database,
    init,
  };
};
export default useFirebase;
