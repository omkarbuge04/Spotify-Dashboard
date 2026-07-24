function AlbumList({albums}){


return(

<div>

<h2>💿 Top Albums</h2>


<div className="album-container">

{

albums.map((album,index)=>(


<div className="album-card" key={index}>


<img

src={
album.image?.[2]?.["#text"] ||
"https://via.placeholder.com/150"
}

alt="album"

/>


<h3>{album.name}</h3>


<p>
{album.artist.name}
</p>


</div>


))

}

</div>


</div>

)

}


export default AlbumList;