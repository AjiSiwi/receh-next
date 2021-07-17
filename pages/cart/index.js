import Layout from "@/components/Layout";
import { Fragment,useEffect,useState } from "react";
import {getChangeMoney} from "@/utils/ChangeMoney";
import {getMoneyNominalById} from "@/utils/Money";
import ChangeMoney from "@/components/changeMoney";

export default function Cart({changeMonies}) {
    const total = changeMonies.reduce((totalNominal, changeMoney) => totalNominal + parseInt(changeMoney.change_nominal),0)

    console.log("Total", total)
    
    return(                 
        <Fragment>
        <Layout>
            <div class="container-xl viewport-height">    
                <h1 class="txt-h1">Keranjang</h1>    
                {/* <!-- beginning of card --> */}
                <div class="my-5 cart-container">
                    <div class="row my-5 txt-h2">
                        <div class="col-9 d-flex justify-content-end">
                            <p class="txt-h1">Total : Rp {total}</p>
                        </div>

                        <div class="col-3 d-flex justify-content-end">
                            <a class="btn btn-cus-lg bg-cus-warning txt-h2" href="invoice.html">Checkout</a>  
                        </div>
                    </div>

                    <hr/>

                    {changeMonies.map((changeMoney,index)=>(
                        <ChangeMoney id={changeMoney.id} changeNominal={changeMoney.change_nominal} />
                    ))}

                    
                    

                </div>
                {/* <!-- end of card --> */}
            </div>
            {/* <!-- end of container --> */}
        </Layout>
        </Fragment>            
    );    
}

export async function getStaticProps() {
    const changeMonies = await getChangeMoney();    
    return {
      props: {
        changeMonies        
      },
    };
  }