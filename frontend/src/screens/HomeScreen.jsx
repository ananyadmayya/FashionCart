import {Row, Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Mess from '../components/Mess';


const HomeScreen = () => {
  const {pageNumber, keyword} = useParams();
  const { data, isLoading, error} = useGetProductsQuery({keyword, pageNumber});
 
  return (
    <>
    {!keyword ? <ProductCarousel /> : (<Link to='/' className='btn btn-light mb-4'>Go Back</Link>)}
    {isLoading ? (
      <Loader />
    ) : error ? (<Mess variant='danger'>
      {error?.data?.message || error.error}
      </Mess>): (<>
     
    <h1>Latest Products</h1>
    <Row>
        {data.products.map((product) =>(
            <Col key={product._id}sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))
        }

    </Row>
    <Paginate
    pages={data.pages}
    page={data.page}
    keyword={keyword ? keyword : ''}/>
    
    </>)}
   
    </>
  )
}

export default HomeScreen