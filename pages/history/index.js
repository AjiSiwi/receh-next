import { Fragment } from "react"
import Layout from "@/components/Layout"

export default function History() {
    return (   
        <Fragment>
            <Layout>
                <div class="container-xl viewport-height">
                    <h1 class="txt-h1">Riwayat Transaksi</h1>
                    <div class="card card-primary my-5">
                        <div class="card-header d-flex justify-content-between">
                            <p class="txt-p"># order 1997</p>
                            <p class="txt-btn">25 - 06 - 2021</p>
                        </div>
                        <div class="card-body">
                            <p class="txt-h2">Nominal Tukar : Rp 1.504.000</p>                
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment> 
    )
}

