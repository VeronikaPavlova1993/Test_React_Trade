import { IParticipant } from '../../../../types';

export function Participant(props: IParticipant) {
 return (
  <>
     <tr className="table-row__events">{props.еvents}</tr>
   <tr className="table-row__time">{props.time}</tr>
   <tr className="table-row__warranty">{props.warranty}</tr>
   <tr className="table-row__conditions">{props.conditions}</tr>
   <tr className="table-row__price">
    <p className="price__blue">{props.price.bluePrice}</p>
    <p className="price__red">{props.price.redPrice}</p>
    <p className="price__green">{props.price.greenPrice}</p>
   </tr>
  
  </>

 );
}
