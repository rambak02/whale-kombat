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
export const Nav = styled.div<NavProps>`
	gap: 3px;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	padding: 10px;
	border-radius: 12px;
	background-color: ${(props) => (props.$isSelected? "#03577F" : "transparent")};
`;
export const NavIcon = styled(Img)<ImgProps>`
	height: 20px;
	color: #52D6D3;
`;
export const NavText = styled.div<NavProps>`
	color: ${(props) => (props.$isSelected ? "white" : "#5EC1CA")};
	font-family: "Montserrat";
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	text-align: center;
`;
export const NavTextBybit = styled(NavText)<NavProps>`
	color: ${(props) => (props.$isSelected ? "white" : "#5EC1CA")};
`;
export const NavIconBybit = styled(NavIcon)`
	width: 44px;
	height: 15px;
`;
