import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
    <div class="container-xl">
        <div class="d-flex row flex-row align-items-center">
            <div class="col-8">
              <img class="img-fluid fill" src="images/Group 36.svg" width="885" height="535" alt="Responsive image"/>              
            </div>
            <div class="col-4 p-5">
              <div class="txt-h1 my-5">Membantu Anda untuk Menukarkan Uang</div>
              <div class="txt-p my-5">Receh adalah sebuah platform yang dapat membantu anda untuk menukar uang anda menjadi pecahan yang lebih kecil dengan sangat mudah dan efisien.</div>
              <a class="dec-none" href="money-changer"><button type="button" class="btn btn-cus-primary bg-cus-warning my-5 txt-btn">Tukar Sekarang</button></a>              
            </div>
        </div>
        
        <div class="txt-h1 my-5 text-center">
          Yang bisa Anda Lakukan
        </div>

        {/* backgroud belum selesai */}
        <div class="bg-cus-1">
          <div class="d-flex row flex-row">
            <div class="dflex col-6">
              <img class="img-fluid fit-content" src="images/box-1.svg" alt="Responsive image"/>
            </div>
            <div class="d-flex col-6 align-items-center">
              <p class="txt-h2">Isikan uang yang ingin anda tukarkan dan pilih pecahan sesuai selera.</p>
            </div>
          </div>
          <div class="d-flex row flex-row">
            <div class="d-flex col-6 align-items-center justify-content-end">
              <p class="txt-h2">Pilih metode pengampilan uang.</p>
            </div>
            <div class="dflex col-6">
              <img class="img-fluid fit-content" src="images/box-1.svg" alt="Responsive image"/>
            </div>
          </div>
          
          <div class="d-flex row flex-row">
            <div class="dflex col-6">
              <img class="img-fluid fit-content" src="images/box-1.svg" alt="Responsive image"/>
            </div>
            <div class="d-flex col-6 align-items-center">
              <p class="txt-h2">Bayar langsung ke kurir</p>
            </div>
          </div>
        </div>
    </div>            
    </Layout>
  );
}
