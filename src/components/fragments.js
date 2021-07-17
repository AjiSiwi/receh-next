export default function Fragments({id,}) {

    return(
        <Fragment>
            <div class="card card-primary txt-h2">
                <div class="card-body row">
                    <div class="col-9 row">
                        <div class="row py-3">
                            <div class="col-3 d-flex justify-content-between">
                                <p>Nilai Tukar</p>                        
                                <p>:</p>
                            </div>
                            <div class="col-3">
                                <p>Rp{changeMoney.changeNominal}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3 d-flex justify-content-between">
                                <p>Pecahan</p>
                                <p>:</p>                                    
                            </div>                                    
                    
                            <div class="col-9 row">
                            {changeMoney.fragments.map((fragment,i)=>(
                                <Fragment>
                                    {console.log("get money",useFetchMoneyById(fragment.money).data?.nominal)}
                                    <div class="col-4">
                                        <p>{useFetchMoneyById(fragment.money).data?.nominal} @ {fragment.quantity}</p>
                                    </div>                             
                                </Fragment>
                            ))}
                            </div>                                            
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-end align-items-center">                            
                        <button class="btn"><i class="fas fa-times fa-2x"></i></button>
                    </div>                      
                </div>                    
            </div>  
        </Fragment>
    )
}