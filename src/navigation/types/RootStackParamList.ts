import { Product } from "@/models/Product";

export type RootStackParamList = {
    Home: Record<string, never>;
    Cart: Record<string, never>;
    Product: {
        product: Product;
    };
};