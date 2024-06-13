export type CLickerProps = {
  onClick: () => void;
};
export type TextFocus = {
  $focus: boolean;
}
 export type GiftProps = {
  cash: number;
  title: string;
 }

 export type CompanyProps = {
  title: string;
  image: string
  selected: boolean;
 }

 export type WeeklyTaskProps = {
  onClick: () => void;
  title: string;
  image: string;
  reward: number;
 }