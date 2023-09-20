import './indicador'

function Fecha({dias}) {
  const DIAS = ["lunes","martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
  const MESES = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
    "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  function obtFecha(){
    const Fecha = new Date()
    Fecha.setDate(Fecha.getDate() + dias)
    const dia = Fecha.getDate();
    return <h1>La fecha nueva seria {DIAS[Fecha.getDay()]} {dia} de {MESES[Fecha.getMonth()]} del {Fecha.getFullYear()}</h1>
  }
  const fechaActual= new Date()
  return (
    <>
      <h1 className='fecha-actual'>Hoy es {DIAS[fechaActual.getDay()]} {fechaActual.getDate()} de {MESES[fechaActual.getMonth()]} del {fechaActual.getFullYear()}</h1>
      <h1 className='fecha-nueva'>{obtFecha()}</h1>
    </>
  );
}

export default Fecha;
