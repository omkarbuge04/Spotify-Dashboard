function TrackList({tracks}){


return(

<div>

<h2>🔥 Top Tracks</h2>


{

tracks.slice(0,5).map((track,index)=>(


<div className="item" key={index}>

{index+1}. {track.name}

</div>


))

}


</div>

)

}


export default TrackList;
