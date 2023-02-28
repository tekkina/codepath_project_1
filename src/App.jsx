import './App.css';
import Products from './components/Products.jsx'
const App = () => {
 return(
   <div>
     <h1> Application Development Softwares</h1>
     <div>
     <h2>What is Application Development Software?</h2>
     <p ><em><b>Application Development software assists developers with the deployment of software applications. 
      Application development is the process of creating a computer program or a set of programs to perform 
      the different tasks that a business requires. From calculating monthly expenses to scheduling sales reports, 
      applications help businesses automate processes and increase efficiency. Every app-building process follows 
      similar  steps: gathering requirements, designing prototypes, testing, implementation, and integration.
      some of the mostly used application development softwares are descriped as follows:</b></em></p>
     </div>
     <Products/>
   </div>
 )
} 
export default App;
