import useFirebase from "./useFirebase";
import useUser from "./useUser";
import { ref as refDB, push, onValue, set } from "firebase/database";
import { ref, computed } from "vue";
const { database } = useFirebase();
const { currentUser } = useUser();
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
  async function joinRoom(id: string) {
    await set(
      refDB(database, "rooms/" + id + "/users/" + currentUser.value.id),
      {
        id: currentUser.value.id,
        score: 0,
      }
    );
  }
  function getRoomById(id: string) {
    if (rooms.value) return rooms.value[id];
    return null;
  }
  return { createRoom, rooms, joinRoom, getRoomById };
};

export default useRoom;
