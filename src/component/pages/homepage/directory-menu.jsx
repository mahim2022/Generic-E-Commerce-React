import { MenuItem } from "./menu-item";
import react, { useContext } from "react";
import "./direcory-menu.styles.scss";
import { useNavigate } from "react-router";
import { DirectoryMenuItems } from "./directoryMenuItemsStates/directoryMenuItemsStates";

export const DirectoryMenu = () => {
	const [sections] = useContext(DirectoryMenuItems);
	let navigate = useNavigate();

	return (
		<div className="directory-menu">
			{sections.map(({ title, id, imageUrl, size, linkUrl }) => (
				<MenuItem
					key={id}
					title={title}
					imageUrl={imageUrl}
					linkUrl={linkUrl}
				></MenuItem>
			))}
		</div>
	);
};
