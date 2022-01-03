import img1 from './image/images.png'
import imggg from './image/images2.jpg'

  
  
  function Check (){


return(

    <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">GraphQL Explained in 100 Seconds</h1>
        <br />
        <img src={img1} />
        <br />
        <img src={imggg}  />
      </div>
      <iframe width="727" height="409" src="https://www.youtube.com/embed/eIQh02xuVw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

)}
export default Check