import Card from "../Card.jsx"
function LangCompo2() {

    const LangData = [
        {srtnm : "EN" , lang :"English Language" , tutor:"125"},
        {srtnm : "ES" , lang :"Spanish Language" , tutor:"23"},
        {srtnm : "JP" , lang :"Arabic Language" , tutor:"54"},
        {srtnm : "DE" , lang :"German Language" , tutor:"76"},
        {srtnm : "SR" , lang :"French Language" , tutor:"33"},
        {srtnm : "EN" , lang :"Arabic Language" , tutor:"98"},
        {srtnm : "EN" , lang :"Italian Language" , tutor:"55"},
        {srtnm : "EN" , lang :"Greek Language" , tutor:"32"},
        {srtnm : "EN" , lang :"Korean Language" , tutor:"55"},
        {srtnm : "EN" , lang :"Hindi Language" , tutor:"65"},
        {srtnm : "EN" , lang :"Greek Language" , tutor:"45"},
        {srtnm : "EN" , lang :"Russian Language" , tutor:"54"},
        {srtnm : "SR" , lang :"French Language" , tutor:"44"},
        {srtnm : "EN" , lang :"Arabic Language" , tutor:"43"},
        {srtnm : "EN" , lang :"Italian Language" , tutor:"65"},
        {srtnm : "EN" , lang :"Greek Language" , tutor:"88"},
        {srtnm : "EN" , lang :"Korean Language" , tutor:"99"},
        {srtnm : "EN" , lang :"Hindi Language" , tutor:"76"},
        {srtnm : "EN" , lang :"Greek Language" , tutor:"67"},
        {srtnm : "EN" , lang :"Russian Language" , tutor:"90"},
       ];

    return (
        <>
            <div className='bg-light bg-gradient d-flex justify-content-center mb-5' style={{ position: 'relative', minHeight: '500px', top: "50px" }}>
                <div className="container mb-5">
                    <div className="row ">
                    {LangData.map(values=>  (<div class="col col-6 col-md-3"><Card values={values}></Card></div>))}
                    
                    </div>
                </div>

            </div>

        </>
    )
}
export default LangCompo2
