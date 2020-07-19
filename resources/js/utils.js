export const formatPrice = (price) => {
    if (price <= 0) return '';

    let result = ('' + price).padStart(3, '0');
    return result.slice(0, -2) + ',' + result.slice(-2);
}

export const curStr = currency => currency ? 'dollar' : 'euro';

const descriptions = [];

export const getDesc = async (id) => {
    const item = descriptions.find(el => el.id == id);
    if (item) return item.desc;

    const desc = await axios.get(`api/desc/${id}`);
    descriptions.push({id, desc});
    return desc;
}
