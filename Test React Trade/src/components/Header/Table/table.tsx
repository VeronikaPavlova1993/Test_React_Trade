import { allParticipant } from '../../../constants';

export function Table() {
 return (
  <>
   <p className="table__title">
    Уважаемые участники, во время вашего хода вы можете изменить параметры
    торгов, указанных в таблице:
   </p>
   <table className="table">
    <thead>
     <tr>
      <th>Ход</th>
      <th></th>
      <th></th>
      <th></th>
     </tr>
     <tr>
      <th>Параметры и требования</th>
      {allParticipant.map((value, index) => {
       return (
        <th>
         <p>Участник №{index + 1}</p>
         <p>{value.name}</p>
        </th>
       );
      })}
     </tr>
    </thead>
    <tbody>
     <tr>
      <th>
       Наличие комплекса мероприятий, повышающих стандарты качества изготовления
      </th>
      {allParticipant.map((value, index) => (
       <td key={index}>{value.еvents}</td>
      ))}
     </tr>
     <tr>
      <th>Срок изготовления лота, дней</th>
      {allParticipant.map((value, index) => (
       <td key={index}>{value.time}</td>
      ))}
     </tr>
     <tr>
      <th>Гарантийные обязательства, мес</th>
      {allParticipant.map((value, index) => (
       <td key={index}>{value.warranty}</td>
      ))}
     </tr>
     <tr>
      <th>Условия оплаты</th>
      {allParticipant.map((value, index) => (
       <td key={index}>{value.conditions}</td>
      ))}
     </tr>
     <tr>
      <th>Стоимость изготовления лота, руб (без НДС)</th>
      {allParticipant.map((value, index) => (
       <td key={index}>
        <p className="price__blue">{value.price.bluePrice}</p>
        <p className="price__red">{value.price.redPrice}</p>
        <p className="price__green">{value.price.greenPrice}</p>
       </td>
      ))}
     </tr>
     <tr>
      <th>Действия</th>
      {allParticipant.map((value, index) => (
       <td key={index}>{value.actions}</td>
      ))}
     </tr>
    </tbody>
   </table>
  </>
 );
}
