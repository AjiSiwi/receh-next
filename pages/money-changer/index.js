import Layout from "@/components/Layout"

export default function MoneyChanger() {
    return (
        <Layout>            
        <div class="container-xl">
            <h1 class="txt-h1 my-4">Nominal Tukar</h1>
            <img class="fill" src="images/Rectangle 10.svg" alt=""/>
            <p class="txt-p my-4">Anda dapat menukarkan uang yang anda ingikan menjadi pecahan yang lebih kecil. Pecahan dimulai dari Rp.100 rupiah sampai dengan Rp.100.000,-. Pastikan anda memilih pecahan yang sesuai nilai yang anda tukar.</p>
            
            <form class="my-4">
                <div class="form-group">
                <label class="txt-h2" for="nilai-tukar">Nilai Tukar</label>
                <input type="number" class="form-control form-primary my-3 txt-form fill" id="nilai-tukar"  placeholder=""/>

                <br/>
                <br/>
                <br/>

                <div class="row">
                    <div class="col-5"><p class="txt-h2">Tukarkan</p></div>
                    <div class="col-5"><p class="txt-h2">Nominal</p></div>
                    
                    <div class="col-5">
                        <select class="form-control form-primary my-3 txt-form fill" id="pecahan">
                            <option selected value="">Pilih pecahan</option>
                            <option value="100000">Rp.100.000</option>
                            <option value="50000">Rp.50.000</option>
                            <option value="20000">Rp.20.000</option>
                            <option value="10000">Rp.10.000</option>
                            <option value="5000">Rp.5.000</option>
                            <option value="2000">Rp.2.000</option>
                            <option value="1000">Rp.1.000</option>
                            <option value="500">Rp.500</option>
                            <option value="200">Rp.200</option>
                            <option value="100">Rp.100</option>
                        </select>
                    </div>
                    <div class="col-5">                    
                        <input type="number" class="form-control form-primary my-3 txt-form fill text-center" id="nominal"  placeholder=""/>      
                    </div>
                    <div class="col-2 d-flex justify-content-center align-items-center">
                        <button class="btn "><i class="fas fa-plus fa-2x"></i></button>
                    </div>

                    
                    <div class="col-5">
                        <select class="form-control form-primary my-3 txt-form fill" id="pecahan">
                            <option selected value="">Pilih pecahan</option>
                            <option value="100000">Rp.100.000</option>
                            <option value="50000">Rp.50.000</option>
                            <option value="20000">Rp.20.000</option>
                            <option value="10000">Rp.10.000</option>
                            <option value="5000">Rp.5.000</option>
                            <option value="2000">Rp.2.000</option>
                            <option value="1000">Rp.1.000</option>
                            <option value="500">Rp.500</option>
                            <option value="200">Rp.200</option>
                            <option value="100">Rp.100</option>
                        </select>
                    </div>
                    <div class="col-5">                    
                        <input type="number" class="form-control form-primary my-3 txt-form fill text-center" id="nominal"  placeholder=""/>      
                    </div>
                    <div class="col-2 d-flex justify-content-center align-items-center">
                        <button class="btn "><i class="fas fa-minus fa-2x"></i></button>
                    </div>

                    
                    
                    <div class="col-5">
                        <select class="form-control form-primary my-3 txt-form fill" id="pecahan">
                            <option selected value="">Pilih pecahan</option>
                            <option value="100000">Rp.100.000</option>
                            <option value="50000">Rp.50.000</option>
                            <option value="20000">Rp.20.000</option>
                            <option value="10000">Rp.10.000</option>
                            <option value="5000">Rp.5.000</option>
                            <option value="2000">Rp.2.000</option>
                            <option value="1000">Rp.1.000</option>
                            <option value="500">Rp.500</option>
                            <option value="200">Rp.200</option>
                            <option value="100">Rp.100</option>
                        </select>
                    </div>
                    <div class="col-5">                    
                        <input type="number" class="form-control form-primary my-3 txt-form fill text-center" id="nominal"  placeholder=""/>      
                    </div>
                    <div class="col-2 d-flex justify-content-center align-items-center">
                        <button class="btn "><i class="fas fa-minus fa-2x"></i></button>
                    </div>

                    <div class="col-6">
                        <a class="dec-none" href="index.html"><button type="button" class="btn btn-cus-primary bg-cus-danger my-5 txt-btn text-white">Kembali</button></a>                    
                    </div>

                    <div class="col-6 d-flex justify-content-end">
                        <a class="dec-none" href="cart.html"><button type="button" class="btn btn-cus-primary bg-cus-warning my-5 txt-btn">Ke Kerangjang</button></a>  
                    </div>
                </div>
                </div>
            </form>
        </div>        
        </Layout>
    )    
}