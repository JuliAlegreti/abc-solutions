import { Category } from "class/Category";
import { Product } from "class/Product";

export const categories:Category[] = [
    new Category(1,"drinks"),
    new Category(2,"lunch"),
    new Category(3,"food"),
    new Category(4,"sea")
]

export const products: Product[] = [
    new Product(
        1,
        "Lorem",
        60.000, 
        true,
        true,
        [1,4],
        "http://lorempixel.com/200/100/food/",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    ),        
    new Product(
        2,
        "ipsum",
        20.000,
        false,
        false,
        [4],
        "http://lorempixel.com/200/100/food/",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    ),new Product(
        3,
        "dolor",
        10.000,
        true,
        true,
        [4],
        "http://lorempixel.com/200/100/food/",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    ),new Product(
        4,
        "sit",
        35.000,
        false,
        false,
        [1,2],
        "http://lorempixel.com/200/100/food/",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    ),new Product(
        5,
        "amet",
        12.000,
        true,
        true,
        [1,4],
        "http://lorempixel.com/200/100/food/",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    ),new Product(
        6,
        "consectetur",
        120.000,
        true,
        false,
        [1,4],
        "http://lorempixel.com/200/100/food/",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    ),new Product(
        7,
        "adipiscing",
        50.000,
        false,
        false,
        [1,3],
        "http://lorempixel.com/200/100/food/",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    ),new Product(
        8,
        "elit",
        2000,
        true,
        false,
        [1,3],
        "http://lorempixel.com/200/100/food/",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    ),new Product(
        9,
        "Maecenas",
        150.000,
        true,
        true,
        [2,4],
        "http://lorempixel.com/200/100/food/",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    ),new Product(
        10,
        "eu",
        200.000,
        false,
        true,
        [2,3],
        "http://lorempixel.com/200/100/food/",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    )
]

  