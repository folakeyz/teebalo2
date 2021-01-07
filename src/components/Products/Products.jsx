import React from 'react';
import apt1 from '../../assets/kit1.jpg';
import apt2 from '../../assets/kit2.jpg';
import apt3 from '../../assets/kit3.jpg';
import apt4 from '../../assets/kit4.jpg';
import apt5 from '../../assets/kit5.jpg';
import apt6 from '../../assets/kit6.jpg';
import styles from  './styles.module.css';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const Products = () => {
  return (
      <div className={styles.containers}>
           <div className={styles.headingsection}>
<span className={styles.subheading}>FEATURED PRODUCTS</span>
</div>
            <div className={styles.grid}>
       
            <div className={styles.myCard}>
            <div className={styles.myPix}>
                <div className={styles.smCaption}><small>$ 100</small></div>
                <Link to="/">
                <img src={apt1} alt="Products" />
                </Link>
                </div> 
                <div className={styles.myText}>
                <h4>MakeUp Kits</h4>
                <small>$ 100</small>
                <hr className={styles.line} />
                <Link to="/" className={styles.view}><VisibilityIcon /></Link>
                <Link to="/" className={styles.btn}><AddShoppingCartIcon /></Link>
                </div> 
            </div>

            <div className={styles.myCard}>
            <div className={styles.myPix}>
               <div className={styles.smCaption}><small>$ 200</small></div>
               <Link to="/">
                <img src={apt2} alt="Mont Blanc Flats" />
                </Link>
                </div> 
                <div className={styles.myText}>
                <h4> MakeUp Kits</h4>
                <small>$ 200</small>
                <hr className={styles.line} />
                <Link to="/" className={styles.view}><VisibilityIcon /></Link>
                <Link to="/" className={styles.btn}><AddShoppingCartIcon /></Link>
                </div> 
            </div>

            
            <div className={styles.myCard}>
            <div className={styles.myPix}>
            <div className={styles.smCaption}><small>$ 300</small></div>
            <Link to="/">
                <img src={apt3} alt="Viagem Terraces" />
                </Link>
                </div> 
                <div className={styles.myText}>
                <h4>MakeUp Kits</h4>
                <small>$ 300</small>
                <hr className={styles.line} />
                <Link to="/" className={styles.view}><VisibilityIcon /></Link>
                <Link to="/" className={styles.btn}><AddShoppingCartIcon /></Link>
                </div> 
            </div>


            <div className={styles.myCard}>
            <div className={styles.myPix}>
            <div className={styles.smCaption}><small>$ 300</small></div>
            <Link to="/">
                <img src={apt4} alt="Viagem Terraces" />
                </Link>
                </div> 
                <div className={styles.myText}>
                <h4>MakeUp Kits</h4>
                <small>$ 300</small>
                <hr className={styles.line} />
                <Link to="/" className={styles.view}><VisibilityIcon /></Link>
                <Link to="/" className={styles.btn}><AddShoppingCartIcon /></Link>
                </div> 
            </div>

            <div className={styles.myCard}>
            <div className={styles.myPix}>
            <div className={styles.smCaption}><small>$ 300</small></div>
            <Link to="/">
                <img src={apt5} alt="Viagem Terraces" />
                </Link>
                </div> 
                <div className={styles.myText}>
                <h4>Ladies Gowb</h4>
                <small>$ 300</small>
                <hr className={styles.line} />
                <Link to="/" className={styles.view}><VisibilityIcon /></Link>
                <Link to="/" className={styles.btn}><AddShoppingCartIcon /></Link>
                </div> 
            </div>

            <div className={styles.myCard}>
            <div className={styles.myPix}>
            <div className={styles.smCaption}><small>$ 300</small></div>
            <Link to="/">
                <img src={apt6} alt="Viagem Terraces" />
                </Link>
                </div> 
                <div className={styles.myText}>
                <h4>Ladies Gown</h4>
                <small>$ 300</small>
                <hr className={styles.line} />
                <Link to="/" className={styles.view}><VisibilityIcon /></Link>
                <Link to="/" className={styles.btn}><AddShoppingCartIcon /></Link>
                </div> 
            </div>



    
    </div>
    </div>
  );
}
export default Products;