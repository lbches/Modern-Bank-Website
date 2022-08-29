import styles from "./styles";
import  {Navbar,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Stats,
  Testimonials,
  Business,
  Button} from './components';

const App= ()=>(
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className={`${styles.boxWidth}`}>
         <Navbar />
      </div>
    </div>
    
    <div className={`text-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Clients />
        <GetStarted />

        
      </div>
    </div>

  </div>
);

export default App