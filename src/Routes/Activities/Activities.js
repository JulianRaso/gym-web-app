import Table from '../../components/Table/Table'

export default function Activities() {
  const title = 'Actividades del Dia'

  const columns = [
    { title: 'Warm-Up'},
    { title: 'Skill/Strength'},
    { title: 'WOD'},
    { title: 'AMRAP'},
    { title: 'EMOM'},
    { title: 'TÁBATA'}
  ]

  const data = [
    {warmUp: 'a', skillStrength:'b', wod:'c', amrap:'d', emom:'e',tabata:'f'}
  ]
  const dataTable = (
    data.map((elements) => (
      <tr>
        <td>{elements.warmUp}</td>
        <td>{elements.skillStrength}</td>
        <td>{elements.wod}</td>
        <td>{elements.amrap}</td>
        <td>{elements.emom}</td>
        <td>{elements.tabata}</td>
      </tr>
    ))
  )

  return Table(title,columns,data,dataTable)
}
