import React, { Component } from 'react';
import jsPDF from 'jspdf';

class Solicitud extends Component {
  state = {
    documento: '',
    oficina: '',
    encargado: '',
    monto: '',
    justificacion: '',
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
          <h1 className="text-4xl font-medium mb-10 text-center">Registrar Solicitud</h1>
          <form onSubmit={this.onSubmit} id='solic'>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Número de documento</label>
              <input type="text" className="form-control
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
                placeholder="ingrese documento"
                name='documento'
                onChange={this.onChange}
                value={this.state.documento}
              />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Oficina</label>
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
                placeholder="Ingrese oficina"
                name='oficina'
                onChange={this.onChange}
                value={this.state.oficina}
                />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Encargado</label>
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
                placeholder="Ingrese Encargado"
                name='encargado'
                onChange={this.onChange}
                value={this.state.encargado}
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEncargado"
                placeholder="Ingrese Encargado"
                name='monto'
                onChange={this.onChange}
                value={this.state.monto}
                />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Justificación</label>
              <textarea className="form-control block
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
                placeholder="Ingrese Justificación"
                name='justificacion'
                onChange={this.onChange}
                value={this.state.justificacion}
                />
            </div>
            <div className='flex justify-evenly items-center'>
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

export default Solicitud;