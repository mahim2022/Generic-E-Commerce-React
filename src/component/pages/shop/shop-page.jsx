import React from "react";
import SHOP_DATA from "./shop-data";
import { CollectionPreview } from "./collection-preview/collection_preview";
import { ShopData } from "./shopDataState";
import { useContext } from "react";
import { useParams } from "react-router";
export const ShopPage = () => {
	const [shopData] = useContext(ShopData);
	const { id } = useParams();

	if (id) {
		const newShopData = shopData.find((product) => product.routeName === id);
		return (
			<div>
				<CollectionPreview
					key={id}
					title={newShopData.title}
					items={newShopData.items}
				></CollectionPreview>
			</div>
		);
	} else {
		return (
			<div>
				{shopData.map(({ id, ...otherCollectionprops }) => (
					<CollectionPreview
						key={id}
						{...otherCollectionprops}
					></CollectionPreview>
				))}
			</div>
		);
	}
};
