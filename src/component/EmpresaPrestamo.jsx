import React, { Component } from 'react';
import jsPDF from 'jspdf';

class EmpresaPrestamo extends Component {
  state = {
    RUC: '',
    empresa: '',
    impuesto: '',
    monto: '',
    aseguradora: '',
    tiempo: '',
    direccion: '',
    celular: '',
    correo: '',
    postSubmited: false
  };

  generatePDF = () => {
    var doc = new jsPDF();
    var texto =`Mediante la presente, la empresa ${this.state.oficina}, identificado con el documento ${this.state.documento}, se dirige a su digno despacho, para solicitar a usted en su calidad de ${this.state.encargado} de la empresa, un prestamo por la suma de ${this.state.monto} soles. ${this.state.justificacion} \n\nLos cuales serán cancelados con un descuento de mi haber mensual. Desde ya quedamos muy agracedidos por su comprensión a mi solicitud y por su alto sentido de humanidad.`;
    var lines
    
    doc.setFontSize(13);
    doc.text('Señores:',20,20);
    doc.setFontSize(15)
    doc.text('ATLAS INTERNATIONAL SERVICE S.A.',20,28);
    doc.setFontSize(13);
    doc.text('Presente.-',20,36);

    doc.setFontSize(13);
    doc.text(`Atte: ${this.state.oficina}`,125,55);
    doc.text(`${this.state.encargado}`,138,63);

    lines = doc.splitTextToSize(texto, 158);
    doc.text(lines, 25,83);

    doc.text('Atentamente.', 25,180);

    doc.text(`${this.state.oficina}`, 90,230);
    
    doc.save('as.pdf');
  };

  onSubmit = e =>{
    if(!this.state.documento || !this.state.monto){
      alert('falta datos');
      e.preventDefault();
    } else{
      this.setState({
        postSubmited: true
      });
      alert('generado');
      e.preventDefault();
    }
  };

  onChange = e =>{
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  render(){
    return(
      <>
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium mb-10 text-center">Registro de Préstamo</h1>
          <form onSubmit={this.onSubmit} id='solic'>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">RUC</label>
              <input type="number" className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputdoc"
                placeholder="ingrese RUC"
                name='ruc'
                onChange={this.onChange}
                value={this.state.ruc}
              />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Nombre de la empresa</label>
              <input type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputoficina"
                placeholder="Ingrese Empresa"
                name='empresa'
                onChange={this.onChange}
                value={this.state.empresa}
                />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Aseguradora</label>
              <input type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEncargado"
                placeholder="Ingrese Aseguradora"
                name='aseguradora'
                onChange={this.onChange}
                value={this.state.aseguradora}
                />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Impuestos</label>
              <input type="number" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputjust"
                placeholder="Ingrese Impuestos"
                name='impuesto'
                onChange={this.onChange}
                value={this.state.impuesto}
                />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Tiempo (Meses)</label>
              <input type="date" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputjust"
                placeholder="Ingrese Tiempo"
                name='tiempo'
                onChange={this.onChange}
                value={this.state.tiempo}
                />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Dirección</label>
              <input type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputjust"
                placeholder="Ingrese Dirección"
                name='direccion'
                onChange={this.onChange}
                value={this.state.direccion}
                />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Número celular</label>
              <input type="number" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputjust"
                placeholder="Ingrese Número celular"
                name='celular'
                onChange={this.onChange}
                value={this.state.celular}
                />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Correo</label>
              <input type="email" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputjust"
                placeholder="Ingrese Correo"
                name='correo'
                onChange={this.onChange}
                value={this.state.correo}
                />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Monto</label>
              <input type="number" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputjust"
                placeholder="Ingrese Monto"
                name='monto'
                onChange={this.onChange}
                value={this.state.monto}
                />
            </div>

            <div className='flex justify-evenly items-center pt-6'>
              <button type="submit" className="
                px-6
                py-2.5
                bg-purple-500
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-purple-400 hover:shadow-lg
                focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-purple-800 active:shadow-lg
                transition
                duration-150
                ease-in-out">cancelar</button>

                <button type="submit" className="
                px-6
                py-2.5
                bg-purple-700
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-purple-500 hover:shadow-lg
                focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-purple-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
                onClick={this.generatePDF}
                >
                  Solicitar
                </button>
              </div>
          </form>
        </div>
      </>
    );
  }
};

export default EmpresaPrestamo;