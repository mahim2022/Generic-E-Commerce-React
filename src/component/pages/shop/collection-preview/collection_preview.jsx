import "./collection-preview.scss";
import { CollectionItem } from "../collection-item/collection-item";
import { useParams } from "react-router";
export const CollectionPreview = ({ title, items }) => {
	const { id } = useParams();
	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{id
					? items.map((item) => <CollectionItem key={item.id} item={item} />)
					: items
							.filter((item, index) => index < 4)
							.map((item) => <CollectionItem key={item.id} item={item} />)}
			</div>
		</div>
	);
};
