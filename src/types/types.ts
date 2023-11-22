export interface EachItemProps {
  id:number;
  itemTitle: string;
  option: string;
  price: number;
  likeCount: number;
  chatCount: number;
}

export interface CommunityListItemProps {
  id:number;
  tag:string;
  title:string;
  userName:string;
  uploadTime:string;
  interestingCount:number;
  answerCount:number;
}