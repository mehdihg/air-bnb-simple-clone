import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SearchCard from '../../components/SearchCard/SearchCard'
import { useRouter } from 'next/router';

const Search = ({searchRes})=>{

    return(
        <div>
        <Header/>
            <SearchCard searchRes={searchRes} />
        <Footer/>
        </div>
    )
}
export default Search
export async function getServerSideProps(){
    const searchRes=await fetch('https://www.jsonkeeper.com/b/5NPS').then(res=>res.json())
    .catch
    (err=>console.log(err))

   return{
    props:{
        searchRes
    }
   }
}