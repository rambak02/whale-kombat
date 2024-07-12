import * as S from "./Loader.styled.ts"

interface LoaderProps {
    progress: number;
}
export const Loader: React.FC<LoaderProps> = ({progress} ) => {
  return (
    <>
    <S.LoadingScreen>
    <S.ProgressBarContainer><S.ProgressBarFill style={{ width: `${progress}%` }} /> </S.ProgressBarContainer>
    </S.LoadingScreen>
    </>
  );
};
