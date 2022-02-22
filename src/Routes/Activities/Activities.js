import React from 'react'
import Table from '../../components/Table/Table'

export default function Activities() {
  const title = 'Actividades del Dia'

  const columns = [
    { title: 'Warm-Up', field: 'warmUp'},
    { title: 'Skill/Strength', field: 'skillStrength'},
    { title: 'WOD', field: 'wod'},
    { title: 'AMRAP', field: 'amrap'},
    { title: 'EMOM', field: 'emom'},
    { title: 'TÁBATA', field: 'tabata'}
  ]

  const data = [
    {warmUp: 'a', skillStrength:'b', wod:'c', amrap:'d', emom:'e',tabata:'f'}
  ]

return Table(columns,data,title)
}
