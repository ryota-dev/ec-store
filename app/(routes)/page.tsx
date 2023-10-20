import Container from '@/components/ui/container';
import Billboard from '@/components/billboard';
import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('fa6f20c1-d729-42f1-a7b2-ae27c98ae7f2');
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 sm:px-6 lg:px-8'>
          <ProductList title='Featured products' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
