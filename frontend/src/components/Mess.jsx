import {Alert} from 'react-bootstrap'

const Mess = ({variant, children}) => {

   return <Alert variant={variant}>
     {children}
    </Alert>;
   
 };
 
 Mess.defaultProps = {
     variant:'info',
 };  


export default Mess