import { Accordion, Card, ListGroup } from "react-bootstrap";
import Link from "next/link";
export default function Sidebar(props) {
  return (
    <>
      <Accordion.Toggle
        as={Card.Header}
        className='mb-2'
        eventKey={props.eventKey}>
        <p>{props.label}</p>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.eventKey}>
        <ListGroup>
          {props.items.map((data, index) => {
            return <ListItem {...data} key={index} />;
          })}
        </ListGroup>
      </Accordion.Collapse>
    </>
  );
}

export function ListItem(props) {
  return (
    <>
      <ListGroup.Item className='list-item' key={props.key}>
        <Link href={props.url}>
          <p>{props.label}</p>
        </Link>
      </ListGroup.Item>
    </>
  );
}
