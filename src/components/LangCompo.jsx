import React from 'react'
import Card from './Card'
// import bgi from '../assets/ttt.avif';
function LangCompo() {

  const LangData = [
    { srtnm: "EN", lang: "English Language", tutor: "125" },
    { srtnm: "ES", lang: "Spanish Language", tutor: "23" },
    { srtnm: "JP", lang: "Arabic Language", tutor: "54" },
    { srtnm: "DE", lang: "German Language", tutor: "76" },
    { srtnm: "SR", lang: "French Language", tutor: "33" },
    { srtnm: "AR", lang: "Arabic Language", tutor: "98" },
    { srtnm: "IT", lang: "Italian Language", tutor: "55" },
    { srtnm: "GR", lang: "Greek Language", tutor: "32" },
    { srtnm: "KR", lang: "Korn Language", tutor: "55" },
    { srtnm: "HI", lang: "Hindi Language", tutor: "65" },
    { srtnm: "GR", lang: "Greek Language", tutor: "45" },
    { srtnm: "RS", lang: "Greek Language", tutor: "54" },
  ];
  return (
    <>
      <div className='bg-light bg-gradient d-flex justify-content-center mb-5' style={{ position: 'relative', minHeight: '500px', top: "50px" }}>
        <div className="container mb-5">
          <div className="row ">
            {LangData.map(values => (<div className="col col-lg-3 col-md-4 col-sm-6 col-6"><Card values={values}></Card></div>))}
            <button type="button" className="btn btn-danger btn-lg m-auto rounded-pill fw-light h6 d-flex align-items-center justify-content-center mt-5" style={{ width: "200px", position: "relative", bottom: "60px" }}> <small>Show All</small> <span className='fw-bold h2 ms-1'> +</span></button>
          </div>
        </div>
      </div>

    </>
  )
}
export default LangCompo
