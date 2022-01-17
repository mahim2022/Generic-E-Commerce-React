import { useNavigate } from "react-router";
import "./menu-item.styles.scss";

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
	const navigate = useNavigate();
	return (
		<div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">Shop Now</span>
			</div>
		</div>
	);
};