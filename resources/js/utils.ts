import axios from 'axios';

export const formatPrice = (price: number): string => {
    if (price <= 0) return '';

    let result = ('' + price).padStart(3, '0');
    return result.slice(0, -2) + ',' + result.slice(-2);
}

export const curStr = (currency: boolean): string => currency ? 'dollar' : 'euro';

interface IDecription {
    id: number;
    desc: string;
}
const descriptions: Array<IDecription> = [];

export const getDesc = async (id: number) => {
    const item = descriptions.find(el => el.id == id);
    if (item) return item.desc;

    const res = await axios.get(`api/desc/${id}`);
    descriptions.push({id, desc: res.data.desc});
    return res.data.desc;
}
