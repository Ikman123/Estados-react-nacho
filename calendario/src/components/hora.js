import './styles.css'

function Hora(props) {
    function obtHora(){
        const hora = new Date()
        if(hora.getHours() >= 8 && hora.getHours() <=18){
            return <img src='https://cdn-icons-png.flaticon.com/128/495/495976.png'></img>
        }
        else if(hora.getHours() >= 21 && hora.getHours() <=5){
          return <img src='https://cdn-icons-png.flaticon.com/128/547/547433.png'></img>
        }
        else if(hora.getHours() >=19 && hora.getHours() <=20){
          return <img src='https://cdn-icons-png.flaticon.com/128/4814/4814444.png'></img>
        }
        else if(hora.getHours() >=6 && hora.getHours() <=7){
          return <img src='https://cdn-icons-png.flaticon.com/128/941/941818.png'></img>
        }
    }
    return (
      <>
        <i className='container-img'>{obtHora()}</i>
      </>
    );
  }
  
  export default Hora;
  