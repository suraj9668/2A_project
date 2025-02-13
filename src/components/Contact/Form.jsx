import React from 'react'

function Form() {
    return (
        <div className='bg-light'>
            <div className="container w-75 pt-5">
                <div className="row w-75 mx-auto pt-5">
                    <div className="col col-12">
                        <p className='h1 fw-bold'>Media and</p>
                        <p className='h1 fw-bold'>Business Inquiries</p>

                        <p className='fs-5 mt-4 mb-0'>Send us a message below or email us at</p>
                        <p className='mt-0 mb-5'><i>contact@info.com</i></p>
                    </div>

                </div>
                <div className="row w-75 mx-auto">
                    <div className="col col-md-6 col-12">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name *</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"/>
                    </div>
                    </div>
                    <div className="col col-md-6 col-12">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Last *</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"/>
                    </div>
                    </div>
                </div>
                <div className="row w-75 mx-auto mb-5">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email *</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"  />
                    </div>
                    <div class="mb-3 mb-5">
                        <label for="exampleFormControlTextarea1" class="form-label">Massage *</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form