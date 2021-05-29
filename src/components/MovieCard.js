import {Card,ListGroupItem,ListGroup} from 'react-bootstrap'
const MovieCard=(props)=>{
      
    return (
   
        <Card style={{ width: '16rem', display:'flex'  , backgroundColor:"#e48900" , padding:'0.5rem'}}>
        <Card.Img variant="top" style={{maxWidth:"90%", justifyContent:"center" , margin:'auto'}} src={`https://image.tmdb.org/t/p/w200/${props.path}`} alt="NO POSTER" />
        <Card.Body style={{margin:"1rem" }}>
          <Card.Title>{`${props.title}`}</Card.Title>
          <Card.Text style={{fontSize:'13px'}}>
          {`${props.overview.substring(0,150)}`}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem style={{backgroundColor:'#eeebdd'}}>Date : {props.date}</ListGroupItem>
          <ListGroupItem> Rating : {props.vote}</ListGroupItem>
        </ListGroup>
        
      </Card>


    );



}


export default MovieCard