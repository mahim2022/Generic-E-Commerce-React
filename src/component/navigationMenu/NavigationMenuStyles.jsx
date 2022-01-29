import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const OptionContainerStyles = css`
	padding: 10px 15px;
	text-decoration: none;
	font-weight: bold;
	font-size: larger;
	color: black;
	cursor: pointer;
	@media screen and (max-width: 800px) {
		width: 100%;
		margin-left: 20px;
		padding-bottom: 20px;
		padding-right: 2px;
	}
`;

export const Header = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		margin-bottom: 1px;
	}
`;
export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
	@media screen and (max-width: 800px) {
		padding: 0px;
		position: relative;
		right: 60px;
	}
`;

export const OptionLink = styled(Link)`
	${OptionContainerStyles}
`;
export const OptionDiv = styled.div`
	${OptionContainerStyles}
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media screen and (max-width: 800px) {
		width: 100%;
		margin-left: 20px;
		margin-right: -60px;
		padding-bottom: 20px;
	}
`;
