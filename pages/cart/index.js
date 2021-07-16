import Layout from "@/components/Layout";
import { Fragment,useEffect,useState } from "react";
import {getChangeMoney} from "@/utils/ChangeMoney";

export default function Cart({changeMoney}) {
    console.log("chaneMoney", changeMoney)
    return(                 
        <Fragment>
        <Layout>
            <div class="container-xl viewport-height">    
                <h1 class="txt-h1">Keranjang</h1>    
                {/* <!-- beginning of card --> */}
                <div class="my-5 cart-container">
                    <div class="row my-5 txt-h2">
                        <div class="col-9 d-flex justify-content-end">
                            <p class="txt-h1">Total : Rp 1.500.400</p>
                        </div>

                        <div class="col-3 d-flex justify-content-end">
                            <a class="btn btn-cus-lg bg-cus-warning txt-h2" href="invoice.html">Checkout</a>  
                        </div>
                    </div>

                    <hr/>

                    <div class="card card-primary txt-h2">
                        <div class="card-body row">
                            <div class="col-9 row">
                                <div class="row py-3">
                                    <div class="col-3 d-flex justify-content-between">
                                        <p>Nilai Tukar</p>                        
                                        <p>:</p>
                                    </div>
                                    <div class="col-3">
                                        <p>Rp 500.000</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3 d-flex justify-content-between">
                                        <p>Pecahan</p>
                                        <p>:</p>                                    
                                    </div>

                                    <div class="col-9 row">
                                        <div class="col-4">
                                            <p>100.000 @ 3</p>
                                        </div>

                                        <div class="col-4">
                                            <p>50.000 @ 2</p>
                                        </div>

                                        <div class="col-4">
                                            <p>10.000 @ 10</p>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 d-flex justify-content-end align-items-center">                            
                                <button class="btn"><i class="fas fa-times fa-2x"></i></button>
                            </div>                      
                        </div>                    
                    </div>
                </div>
                {/* <!-- end of card --> */}

                {/* <!-- beginning of card --> */}
                <div class="my-5 cart-container">
                    <div class="card card-primary txt-h2">
                        <div class="card-body row">
                            <div class="col-9 row">
                                <div class="row py-3">
                                    <div class="col-3 d-flex justify-content-between">
                                        <p>Nilai Tukar</p>                        
                                        <p>:</p>
                                    </div>
                                    <div class="col-3">
                                        <p>Rp 1.000.000</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3 d-flex justify-content-between">
                                        <p>Pecahan</p>
                                        <p>:</p>                                    
                                    </div>

                                    <div class="col-9 row">
                                        <div class="col-4">
                                            <p>100.000 @ 2</p>
                                        </div>

                                        <div class="col-4">
                                            <p>50.000 @ 4</p>
                                        </div>

                                        <div class="col-4">
                                            <p>20.000 @ 15</p>
                                        </div> 

                                        <div class="col-4">
                                            <p>10.000 @ 30</p>
                                        </div>                                                                   
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 d-flex justify-content-end align-items-center">
                                <button class="btn"><i class="fas fa-times fa-2x"></i></button>
                            </div>                      
                        </div>                    
                    </div>
                </div>
                {/* <!-- end of card --> */}
            </div>
            {/* <!-- end of container --> */}
        </Layout>
        </Fragment>            
    );    
}

export async function getStaticProps() {
    const changeMoney = await getChangeMoney();      
    return {
      props: {
        changeMoney
      },
    };
  }