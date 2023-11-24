import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Mess from '../components/Mess';


const HomeScreen = () => {
  const { data: products, isLoading, error} = useGetProductsQuery();
 
  return (
    <>
    {isLoading ? (
      <Loader />
    ) : error ? (<Mess variant='danger'>
      {error?.data?.message || error.error}
      </Mess>): (<>
    <h1>Latest Products</h1>
    <Row>
        {products.map((product) =>(
            <Col key={product._id}sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))
        }

    </Row></>)}
   
    </>
  )
}

export default HomeScreen