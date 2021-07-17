import { Fragment } from "react"
import Layout from "@/components/Layout"


export default function Invoice() {
    return(
        <Fragment>
            <Layout>
                <div class="container-xl">
                    <h1 class="txt-h1">Pemesanan</h1>
                    <img class="fill" src="images/Rectangle 10.svg" alt=""/>
                    <p class="txt-p my-4">Anda dapat menukarkan uang yang anda ingikan menjadi pecahan yang lebih kecil. Pecahan dimulai dari Rp.100 rupiah sampai dengan Rp.100.000,-. Pastikan anda memilih pecahan yang sesuai nilai yang anda tukar.</p>
                    
                    <div class="row">
                        <div class="col-12">
                            <label class="txt-h2" for="name">Metode Pengambilan</label>                
                            <select class="form-control form-primary my-3 txt-form fill" name="" id="">
                                <option selected value="">Pilih metode pengambilan</option>
                                <option value="">Ambil di Gerai</option>
                                <option value="">Antar ke Rumah</option>
                            </select>
                        </div>
                        <div class="col p-5">
                            <form action="">
                                <label class="txt-h2" for="name">Nama</label>
                                <input type="text" class="form-control form-primary my-3 txt-form fill" id="name"  placeholder=""/>

                                <label class="txt-h2" for="wa-number">Nomer WA</label>
                                <input type="number" class="form-control form-primary my-3 txt-form fill" id="wa-number"  placeholder=""/>

                                <label class="txt-h2" for="email">Email</label>
                                <input type="email" class="form-control form-primary my-3 txt-form fill" id="email"  placeholder=""/>

                                <label class="txt-h2" for="district">Kecamatan</label>
                                <input type="number" class="form-control form-primary my-3 txt-form fill" id="district"  placeholder=""/>

                                <label class="txt-h2" for="village">Desa</label>
                                <input type="number" class="form-control form-primary my-3 txt-form fill" id="village"  placeholder=""/>

                                <label class="txt-h2" for="address">Alamat Lengkap</label>                    
                                <textarea  class="form-control form-textarea my-3 txt-form fill" name="" id="" rows="10"></textarea>

                            </form>
                        </div>
                        <div class="col p-4">
                            {/* <!-- card biaya admin dan ongkir --> */}
                            <div class="card card-primary txt-h2 my-5">
                                <div class="row p-5">
                                    <div class="col d-flex justify-content-between">
                                        <p>Biaya Admin</p>
                                        <p>:</p>
                                    </div>
                                    <div class="col">
                                        <p>Rp 2.000</p>
                                    </div>

                                    <div class="w-100"></div>

                                    <div class="col d-flex justify-content-between">
                                        <p>Ongkir</p>
                                        <p>:</p>
                                    </div>
                                    <div class="col">
                                        <p>Rp 2.000</p>
                                    </div>                        
                                </div>
                            </div>
                            {/* <!-- end of card biaya admin n ongkit --> */}

                            <div class="card card-primary txt-h2 my-5">
                                <div class="row p-5">
                                    <div class="col-12 text-center">
                                        <p>Invoice</p>
                                    </div>
                                    <div class="col-12 row">
                                        <div class="col d-flex justify-content-between">
                                            <p>Nominal tukar</p>
                                            <p>:</p>
                                        </div>
                                        <div class="col">
                                            <p>Rp 500.000</p>
                                        </div>

                                    </div>

                                    <div class="col-6 d-flex justify-content-between pr-4">
                                        <p>Pecahan</p>
                                        <p>:</p>
                                    </div>                    

                                    <div class="col-12 row">
                                        <div class="col-6 text-end">
                                            <p>Rp 100.000</p>
                                        </div>
                                        <div class="col-6">
                                            <p>@ 3</p>
                                        </div>

                                        <div class="col-6 text-end">
                                            <p>Rp 50.000</p>
                                        </div>
                                        <div class="col-6">
                                            <p>@ 2</p>
                                        </div>

                                        
                                        <div class="col-6 text-end">
                                            <p>Rp 10.000</p>
                                        </div>
                                        <div class="col-6">
                                            <p>@ 10</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="card card-primary txt-h2 my-5">
                                <div class="row p-5">
                                    <div class="col-12 text-center">
                                        <p>Invoice</p>
                                    </div>
                                    <div class="col-12 row">
                                        <div class="col d-flex justify-content-between">
                                            <p>Nominal tukar</p>
                                            <p>:</p>
                                        </div>
                                        <div class="col">
                                            <p>Rp 1.000.000</p>
                                        </div>

                                    </div>

                                    <div class="col-6 d-flex justify-content-between pr-4">
                                        <p>Pecahan</p>
                                        <p>:</p>
                                    </div>                    

                                    <div class="col-12 row">
                                        <div class="col-6 text-end">
                                            <p>Rp 100.000</p>
                                        </div>
                                        <div class="col-6">
                                            <p>@ 2</p>
                                        </div>

                                        <div class="col-6 text-end">
                                            <p>Rp 50.000</p>
                                        </div>
                                        <div class="col-6">
                                            <p>@ 4</p>
                                        </div>

                                        <div class="col-6 text-end">
                                            <p>Rp 20.000</p>
                                        </div>
                                        <div class="col-6">
                                            <p>@ 15</p>
                                        </div>
                                        
                                        <div class="col-6 text-end">
                                            <p>Rp 10.000</p>
                                        </div>
                                        <div class="col-6">
                                            <p>@ 30</p>
                                        </div>                        
                                    </div>
                                </div>
                            </div>

                            <div class="border-bottom border-3 border-dark d-flex align-items-center justify-content-center p-3">
                                <p class="txt-h1">Total : Rp 1.500.400</p>                    
                            </div>

                            <div class="row my-3">
                                <div class="col p-3">
                                    <a href="cart.html" class="btn btn-flex bg-cus-danger text-white txt-h2 p-3">Batal</a>                        
                                </div>
                                <div class="col p-3">
                                    <a class="btn btn-flex bg-cus-warning txt-h2 p-3" href="../history">Pesan</a>                                    
                                </div>            
                            </div>                            
                        </div>
                    </div>
                </div>                
            </Layout>
        </Fragment>
    )
}

