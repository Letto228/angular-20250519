export function getPrice(price: number, _locale?: string, _format: string = ''): string {
    const valute = '$';

    // eslint-disable-next-line no-console
    // console.log(price);

    return `${price} ${valute}`;
}
