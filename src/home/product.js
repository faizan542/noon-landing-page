import React, { useState } from 'react';
import Card from '../component/card'


function Product() {
    const [product, setProduct] = useState([
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1610784898/N43748990A_1.jpg',
            title: 'U-HOOME Push Pop',
            description: 'Bubble Fidget Sensor',
            price: 'AED 8.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1605814220/N41044065A_1.jpg',
            title: 'I-Phone 12 max',
            description: '256 GB',
            price: 'AED 4678.95'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N40633047A_1.jpg',
            title: 'PlatStation 5',
            description: 'Console (Disc Version)',
            price: 'AED 3099.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1606407160/N39843845A_1.jpg',
            title: 'Smart Watch',
            description: 'Generic Series 5',
            price: 'AED 38.50'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1563786689/N22732308A_1.jpg',
            title: 'Apple Airpods',
            description: 'Apple Airpods with charging case',
            price: 'AED 476.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1605814228/N40582910A_1.jpg',
            title: 'Apple iPad',
            description: 'Apple iPad (8th Generation)',
            price: 'AED 1149.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1592221002/N38650144A_1.jpg',
            title: 'Viro Mask',
            description: 'Washable Anti-Viral',
            price: 'AED 49.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1612944610/N44278658A_1.jpg',
            title: 'Laptop',
            description: 'Lenovo Ideapad 3 LAptop',
            price: 'AED 1997.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1586152362/N26505142A_1.jpg',
            title: 'Noon east',
            description: 'Cooking set',
            price: 'AED 165.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1601748944/N15399431A_1.jpg',
            title: 'Water Bottle',
            description: 'Copper Water Bottle Gold',
            price: 'AED 49.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1537701283/N18021297A_1.jpg',
            title: 'Sofa',
            description: 'Three Seater Sofa',
            price: 'AED 65.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1518585474/N13393892A_1.jpg',
            title: 'Breville Barista',
            description: 'Espresso Machine',
            price: 'AED 2090.00 '
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1622006864/N39599771A_1.jpg',
            title: 'Electric Kettle',
            description: 'Amal Stainless Steel',
            price: 'AED 19.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1588350932/N15502174A_1.jpg',
            title: 'Microwave Oven',
            description: 'Geepas Microwave Oven 1200W',
            price: 'AED 185.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1607501134/N42914208A_3.jpg',
            title: 'One Plus Nord N10',
            description: 'Dual Sim Midnight Ice',
            price: 'AED 872.90'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1571903790/N11086450A_1.jpg',
            title: "Men's Watch",
            description: 'FOSSIL, Water Resistant Leather Watch',
            price: 'AED 271.15'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1613666772/N11202742A_1.jpg',
            title: 'Dolce & Gabbana',
            description: 'The One EDP 100ml',
            price: '195.00'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1595942326/N38560714A_1.jpg',
            title: 'GARNIER',
            description: 'Repairing Papaya 3',
            price: '38.60'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1614842337/N44597797A_1.jpg',
            title: 'Hand Bag',
            description: 'ALDO Astardonna',
            price: 'AED 195.98'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1579516733/N33799091A_1.jpg',
            title: 'PARAJOHN 3-Piece',
            description: 'Scatola Trolley Luggage',
            price: 'AED 294.0'
        },
    ])

    return <>
        <div className='row p-0 m-0 g-3'>
            {product.map((e, i) => {
                return <div key={i} className='col-md-3'>
                    <Card imageSrc={e.imageSrc} title={e.title} description={e.description} price={e.price} />
                </div>
            })}

        </div>
    </>
}
export default Product