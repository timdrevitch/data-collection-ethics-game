export interface IGame {
  _id?: string;
  player?: string;
  startedDate?: string;
  checkpoint?: number;
  isNervous?: boolean;
  isHesitant?: boolean;
  readTerms?: boolean;
  commentIncludesInterviewCount?: boolean;
  postIsGood?: boolean;
  apiQuestionCorrect?: boolean;
}
