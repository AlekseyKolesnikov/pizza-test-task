export interface IItem {
	id: number;
	name: string;
	img: string;
	price: number;
	usd: number;
}

export interface IBasketItem {
	id: number;
	qnt: number;
}

export interface IFuncNumberReturnVoid {
    // eslint-disable-next-line no-unused-vars
    (num: number): void;
}

export interface IFuncStringReturnVoid {
    // eslint-disable-next-line no-unused-vars
    (str: string): void;
}

export interface IBasketAction {
    type: string;
    id: number;
}

export interface ICurrencyAction {
    type: string;
}

export interface IOrderAction {
    type: string;
    payload: number | string;
}

export interface IZones {
    zones: [number];
    zones_usd: [number];
}
