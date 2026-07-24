function SearchBar({artist,setArtist,search}){


return(

<div className="search-box">

<input

placeholder="Search Artist..."

value={artist}

onChange={(e)=>setArtist(e.target.value)}

/>


<button onClick={search}>
Search
</button>


</div>

)

}


export default SearchBar;