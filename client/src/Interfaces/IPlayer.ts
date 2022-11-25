export interface IPlayer {
  _id?: string;
  email?: string;
  playername?: string;
  firstname?: string;
  lastname?: string;
  fullname?: string;
  image?: string;
  joinDateString?: string;
  gameInProgress?: boolean;
  gamesStarted?: number;
  gamesFinished?: number;
  endingsReached?: number;
}
