export default interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image123: string;
    rating: {
        rate:number;
        count: number;
    };
}