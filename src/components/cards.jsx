import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import players from "../players";

function CardsPlayer() {
  const jouers = players.map((player) => {
    return (
      <div key={player.id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={player.image} style={{widows: "286", height: 286}}/>
          <Card.Body>
            <Card.Title>{player.nom}</Card.Title>
            <Card.Text>
              club :{player.club} <br />
              Numero : {player.numero} <br />
              Age :{player.age}
            </Card.Text>
            <Button variant="primary">{player.nationnalite}</Button>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return jouers;
}

export default CardsPlayer;
