import { Product } from "@/models/Product";

const exampleFin = 'https://images.pexels.com/photos/4603876/pexels-photo-4603876.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'

export const products: Product[] = [
    {
        id: '1',
        name: 'Classic Denim Jacket',
        price: '$79',
        image: exampleFin,
    },
    {
        id: '2',
        name: 'Cotton Oversized Tee',
        price: '$29',
        image: exampleFin,
    },
];
