const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkProducts() {
    try {
        const productCount = await prisma.product.count();
        console.log('Total products in database:', productCount);

        const products = await prisma.product.findMany({
            take: 5,
            select: {
                id: true,
                title: true,
                price: true,
                inStock: true
            }
        });

        console.log('\nFirst 5 products:');
        products.forEach(p => {
            console.log(`- ${p.title} ($${p.price}) - In Stock: ${p.inStock}`);
        });

    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

checkProducts();
