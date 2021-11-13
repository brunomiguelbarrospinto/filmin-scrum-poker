import useFirebase from "./useFirebase";
import { ref as refDB, push, onValue } from "firebase/database";
import { ref } from "vue";
const { database } = useFirebase();
const roomsRefDB = refDB(database, "rooms");
const rooms: any = ref();
onValue(roomsRefDB, (snapshot) => {
  rooms.value = snapshot.val();
});

const useRoom = (): any => {
  function createRoom(name: string) {
    push(roomsRefDB, {
      name,
    });
  }

  return { createRoom, rooms };
};

export default useRoom;
