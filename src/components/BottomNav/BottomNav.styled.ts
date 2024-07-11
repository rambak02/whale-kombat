import { Img, ImgProps } from "react-image";
import styled from "styled-components";

interface NavProps {
	$isSelected: boolean;
}

export const NavGridWrapper = styled.div`
	width: 100%;
	// height: 65px;
	position: fixed;
	z-index: 1;
	bottom: 15px;
`;

export const NavGrid = styled.nav`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	align-items: center;
	padding: 12px;
	margin: 0 16px;
	background: radial-gradient(
		149.3% 149.3% at 50% 50%,
		#7ad4df 0%,
		#03577f 100%
	);
	border-radius: 24px;
	// display: flex;
	// justify-content: space-around;
	gap: 10px;
`;
export const Nav = styled.div`
	gap: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
`;
export const NavIcon = styled(Img)<ImgProps>`
	height: 24px;
`;
export const NavText = styled.div<NavProps>`
	color: ${(props) => (props.$isSelected ? "white" : "black")};
	font-family: "Raleway";
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	text-align: center;
`;
export const NavTextBybit = styled(NavText)<NavProps>`
	color: ${(props) => (props.$isSelected ? "white" : "black")};
`;
export const NavIconBybit = styled(NavIcon)`
	width: 44px;
	height: 15px;
`;
