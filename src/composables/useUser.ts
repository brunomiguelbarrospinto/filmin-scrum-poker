import useFirebase from "./useFirebase";
import { ref as refDB, push, onValue } from "firebase/database";
import { ref } from "vue";
const { database } = useFirebase();

const users: any = ref();

const useUser = (): any => {
  function getUsers() {
    console.log(database);
    onValue(refDB(database, "users"), (snapshot) => {
      users.value = snapshot.val();
    });
  }
  function createUser(id: string, name: string) {
    push(refDB(database, "users/" + id), {
      name,
    });
  }
  function getUserById(id: string) {
    return users.value?.[id];
  }
  return { getUsers, createUser, users, getUserById };
};

export default useUser;
