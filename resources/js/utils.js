export const formatPrice = (price) => {
    if (price <= 0) return '';

    let result = ('' + price).padStart(3, '0');
    return result.slice(0, -2) + ',' + result.slice(-2);
}
