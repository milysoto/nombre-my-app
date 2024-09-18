import React from "react";


  function formulario(){
    return(
      <div style={ { maxWidth:'400px', margin:' auto', padding:'20px'}}>
        <h1> REGISTRO DE DATOS</h1>
        <form>
          <div> 
            <label  style={{display:"block", marginBottom:'0px'}}>
            Nombre:
            </label>
              <input type="text" 
                id="nombre" 
                name="NOBRE" 
                placeholder="ingresar nombre." 
                style={{width:'100%',padding:'11px' }}>
              </input>
            </div>



    <div >
      <label > apellido: </label>
        <input
          type="apellido"
          id='apellido'
          name="apellido"
          placeholder="ingresar apellido"
          style={{width:'100%',padding:'11px'}}>
        </input>
    </div>



  <div>
    <label >email:</label>
      <input
        type="email"
        id='email'
        name="email"
        placeholder="ingresar email"
        style={{width:'100%',padding:'11px'}}>
      </input>
  </div>

    <div >
    <label > telefono: </label>
      <input
        type="telefono"
        id='telefono'
        name="telefono"
        placeholder="ingresar numero de telefono"
        style={{width:'100%',padding:'11px' }} >
      </input>
    </div>


  <div >
  <label> contraseña: </label>
    <input
      type="password"
      id='password'
      name="password"
      placeholder="ingresar contraseña"
      style={{width:'100%',padding:'11px' }}>
    </input>
  </div>


  <div>
    <label>confirmar contraseña: </label>
    <input
      type='password'
      id='confirmpassword'
      name="confirmpassword"
      placeholder="ingresar contraseña nuevamente"
      style={{width:'100%',padding:'11px'}}>
    </input>
  </div>

    <button type="submit">ENVIAR</button>
</form>

</div>
);
}

export default formulario;