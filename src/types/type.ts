export type CLickerProps = {
  onClick: () => void;
};
export type TextFocus = {
  $focus: boolean;
};
export type GiftProps = {
  cash: number;
  title: string;
};

export type CompanyProps = {
  title: string;
  image: string;
  selected: boolean;
};

export type WeeklyTaskProps = {
  onClick: () => void;
  title: string;
  image: string;
  reward: number;
};
export type DailyRewardsProps = {
  day: number;
  reward: number;
  collected: boolean;
};

export type BoostType = {
  name: string;
  avatar: string;
  profit: number;
  level: number;
  cost: number;
}
