import useFirebase from "./useFirebase";
import { ref as refDB, push, onValue, set, remove } from "firebase/database";
import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";

const { database } = useFirebase();
const usersRefDB = refDB(database, "users");
const users: any = ref();
onValue(usersRefDB, (snapshot) => {
  users.value = snapshot.val();
});

function getLocalStorageUserId(): string {
  return localStorage.getItem("filmin-scrum-poker-user-id") as string;
}

const useUser = (): any => {
  function setUser(name: string) {
    const id = uuidv4();
    set(refDB(database, "users/" + id), {
      id,
      name,
    });
    localStorage.setItem("filmin-scrum-poker-user-id", id);
  }
  function removeUser() {
    remove(refDB(database, "users/" + getLocalStorageUserId()));
    localStorage.removeItem("filmin-scrum-poker-user-id");
  }
  function getUserById(id: string) {
    return users.value?.[id];
  }

  return {
    setUser,
    users,
    removeUser,
    currentUser: computed(() => {
      const user = users.value?.[getLocalStorageUserId()];
      if (!user && users.value) {
        localStorage.removeItem("filmin-scrum-poker-user-id");
      }
      return user;
    }),
  };
};

export default useUser;
