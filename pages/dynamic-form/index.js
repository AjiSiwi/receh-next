import Layout from "@/components/Layout";
import { Fragment,useEffect,useState } from "react";
import {getMoney} from "@/utils/Money";

function handleCahnge(params) {
    this.setState({value: params.target.value});
}

export default function DynamicForm({monies}) {
    const [inputFragments, setInputFragment] = useState([
        { money : '', change_money:'', quantity:''}        
    ]);

    this.handleChange = this.handleChange.bind(this);
    
    return(
        <Fragment>
        <Layout>                    
        <div class="container-xl">
            <h1 class="txt-h1 my-4">Nominal Tukar</h1>
            <img class="fill" src="images/Rectangle 10.svg" alt=""/>
            <p class="txt-p my-4">Anda dapat menukarkan uang yang anda ingikan menjadi pecahan yang lebih kecil. Pecahan dimulai dari Rp.100 rupiah sampai dengan Rp.100.000,-. Pastikan anda memilih pecahan yang sesuai nilai yang anda tukar.</p>
            
            <form class="my-4">
                <div class="form-group">
                <label class="txt-h2" for="nilai-tukar">Nilai Tukar</label>
                <input type="number" class="form-control form-primary my-3 txt-form fill" name="change_money" id="change_money"  placeholder=""/>

                <br/>
                <br/>
                <br/>

                <div class="row">
                    <div class="col-5"><p class="txt-h2">Tukarkan</p></div>
                    <div class="col-5"><p class="txt-h2">Nominal</p></div>
                    
                    {inputFragments.map((fragment,index)=>(
                        <Fragment>
                            <div class="col-5">
                                <select class="form-control form-primary my-3 txt-form fill" id="money">
                                    <option value="">Pilih Pecahan</option>
                                    {monies.map((money)=>(
                                        <option key={money.id} value={fragment.money}>{money.nominal}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="col-5">                    
                                <input type="number" class="form-control form-primary my-3 txt-form fill text-center" name="nominal" id="nominal" value={fragment.quantity}  placeholder=""/>      
                            </div>
                            <div class="col-2 d-flex justify-content-center align-items-center">
                                <button class="btn "><i class="fas fa-plus fa-2x"></i></button>
                            </div>
                        </Fragment>                        
                    ))}


                    <div class="col-6">
                        <a class="dec-none" href="index.html"><button type="button" class="btn btn-cus-primary bg-cus-danger my-5 txt-btn text-white">Kembali</button></a>                    
                    </div>

                    <div class="col-6 d-flex justify-content-end">
                        <a class="dec-none" href=""><button type="submit" class="btn btn-cus-primary bg-cus-warning my-5 txt-btn">Ke Kerangjang</button></a>  
                    </div>
                </div>
                </div>
            </form>
        </div>        
        </Layout>
        </Fragment>
    )
}

export async function getStaticProps() {
    const monies = await getMoney();      
    return {
      props: {
        monies
      },
    };
  }