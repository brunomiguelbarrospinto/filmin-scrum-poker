import UserInterface from "./UserInterface";

interface RoomInterface {
  name: string;
  roundingScore: number;
  isVisibleRoundingScore: boolean;
  users: UserInterface[];
}

export default RoomInterface;
