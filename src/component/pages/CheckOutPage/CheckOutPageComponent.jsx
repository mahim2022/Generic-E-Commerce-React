import "./CheckOutPageComponent.scss";
import { useContext } from "react";
import { CartItemState } from "../../cartComponent/CartItemState/CartItemState";
import { TotalPrice } from "../../cartComponent/CartItemState/TotalPrice";
import { CheckOutItem } from "./CheckOutItem/Check_Out_Item";
import { ShopData } from "../shop/shopDataState";
import { Button } from "react-bootstrap";
import { PaymentModal } from "./PayNowModal/PayNowModal";

export const CheckOutPage = () => {
	const [cartItem] = useContext(CartItemState);
	const [totalPrice] = useContext(TotalPrice);
	const PaymentModalFunction = () => {
		return <PaymentModal></PaymentModal>;
	};
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>DescripTion</span>
				</div>
				<div className="header-block">
					<span>Qauntity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItem.map((item) => (
				<CheckOutItem key={item.id} item={item}></CheckOutItem>
			))}
			<div className="total">$ {totalPrice}</div>
			<div className="payButton">
				<PaymentModal></PaymentModal>
			</div>
		</div>
	);
};
