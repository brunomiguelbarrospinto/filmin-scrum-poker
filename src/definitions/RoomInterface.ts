interface RoomInterface {
  name: string;
  roundingScore: number;
  isVisibleRoundingScore: boolean;
  users?: {
    id: string;
    score: number;
  };
}

export default RoomInterface;
