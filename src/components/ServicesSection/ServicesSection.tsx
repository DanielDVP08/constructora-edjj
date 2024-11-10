export default function ServicesSection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-semibold text-center mb-12 text-white">
        ¿Que Ofrecemos?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* <img src="https://source.unsplash.com/600x400/?construction" alt="Service 1" className="w-full h-48 object-cover" /> */}
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Perfiles Profesionales</h3>
            {/* <p className="text-gray-700">
              Ofrecemos gestión integral de perfiles profesionales competentes y
              eficaces, seleccionando y administrando el talento adecuado para
              assegurar el éxito y la eficiencia de cada proyecto
            </p> */}
          </div>
        </div>
        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* <img src="https://source.unsplash.com/600x400/?architecture" alt="Service 2" className="w-full h-48 object-cover" /> */}
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              Venta de Equipo, Maquinarias y/o Materiales
            </h3>
            {/* <p className="text-gray-700">
              Ofrecemos un servicio versátil y confiable de compra de materiales
              y maquinarias, garantizando seguridad y confianza
            </p> */}
          </div>
        </div>
        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* <img src="https://source.unsplash.com/600x400/?landscape" alt="Service 3" className="w-full h-48 object-cover" /> */}
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Proveedores Confiables</h3>
            {/* <p className="text-gray-700">
              Te conectamos con los mejores proveedores de materiales de
              construcción, garantizando calidad, precios competitivos y entrega
              oportuna para que tus proyectos avancen sin contratiempos.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
