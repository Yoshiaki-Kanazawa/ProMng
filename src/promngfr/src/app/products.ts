export const products = [
    {
        name: 'mono1',
        usedate: '2020/3/8',
        quantity: '23',
        purchasedate: '2020/3/7',
        stock: '42'
    },
    {
        name: 'mono3',
        usedate: '2020/3/8',
        quantity: '23',
        purchasedate: '2020/3/7',
        stock: '42'
    }
];
export class Product {
    id: number;
    name: string;
    quantity: number;
    useddate: Date;
    stock: number;
    Purchasedate: Date;
}
