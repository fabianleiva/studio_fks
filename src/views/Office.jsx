const Office = () => {
  return (
    <main className="pt-[20vh] px-5 page-fade-in">
      {/* Office info */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="flex uppercase text-left ">Descripción</div>
        <div className="grid grid-cols-1 gap-3 lg:col-span-3">
          <p className="text-left ">
            Studio FKS es una oficina de arquitectura con base en Santiago de
            Chile, fundada por Juan Pablo Fuentes, Tomás Keymer y Andrés
            Sanfuentes. Diseñamos y desarrollamos proyectos de alto estándar en
            distintas escalas: master plans, arquitectura residencial, edificios
            y muebles. Garantizamos la máxima calidad desde la etapa conceptual
            hasta la obra construida, integrando siempre la visión del cliente.
            Nuestro enfoque combina precisión técnica, sensibilidad territorial
            y un fuerte compromiso con la materialidad, el contexto y el oficio
            arquitectónico. Abordamos cada encargo como una oportunidad para
            explorar nuevas formas de habitar, a través de una metodología
            colaborativa y un proceso de diseño riguroso. Nos interesa
            establecer relaciones duraderas con los clientes, entendiendo sus
            necesidades y aspiraciones como el punto de partida de soluciones
            arquitectónicas únicas y significativas. La experiencia acumulada
            por los socios en oficinas nacionales e internacionales nos permite
            operar con una mirada crítica, contemporánea y multidisciplinaria.
          </p>
        </div>
      </section>

      {/* Office image */}
      {/* <section className="mb-20 grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="flex uppercase text-left ">Equipo</div>
        <div className="grid grid-cols-1 gap-3 lg:col-span-3">
          <img src="/public/placeholder.webp" alt="studio_fks" />
        </div>
      </section> */}

      {/* Recognitions */}
      {/* <section className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-20">
        <div></div>
        <div className="col-span-3">
          <div className="uppercase text-left col-span-1 mb-3">
            Reconocimientos
          </div>
          <div className="flex flex-col space-y-1 justify-start text-left ">
            <p>
              2024 - Mies Crown Hall Americas Prize, Outstanding Project / Hogar
              Aleman
            </p>
            <p>2023 - Archdaily Award Building of the year / Casa de Vidrio</p>
            <p>
              2022 - Mies Crown Hall Americas Prize, Nominación / Casa de Vidrio
            </p>
            <p>
              2018 - Wallpaper Magazine Award, Best New Private House / Casa
              Ghat
            </p>
            <p>
              2017 - Mies Crown Hall Americas Prize 2017, Nominación / Casa Ghat
            </p>
            <p>
              2017 - Architectural Record Magazine, Design Vanguard Award / Max
              Nunez
            </p>
            <p>
              2015 - Mies Crown Hall Americas Prize, Nominación / MAD Building
            </p>
            <p>
              2013 - Wallpaper Magazine Award, Best New Private House / Casa
              10x10
            </p>
          </div>
        </div>
        <div className="col-span-2"></div>
      </section> */}

      {/* Team */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="text-left uppercase col-span-1">Equipo</div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Fuentes */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-left mb-3 uppercase">Juan Pablo Fuentes</p>
                  <p className="text-left">
                    Juan Pablo Fuentes Garcés se tituló de arquitecto en la
                    Pontificia Universidad Católica de Chile en 2021, donde
                    también obtuvo el grado de magíster en Arquitectura con
                    distinción máxima. Entre 2022 y 2024 trabajó en Combeau
                    Arquitectura, en colaboración con Studio Caban (Tucson,
                    Arizona), participando en el desarrollo de proyectos
                    hoteleros como el Four Seasons Riviera Maya y Six Senses
                    Xala (México). Participó en el desarrollo de masterplans,
                    diseño de habitaciones , restaurantes, espacios de llegada y
                    documentación arquitectónica. Actualmente también trabaja en
                    Ehvert Engineering, consultora de ingeniería estadounidense,
                    en coordinación BIM para Data Centers, participando en la
                    revisión de diseños, presupuestos, estimación de costos y
                    calendarios de obra.
                  </p>
                </div>
              </div>

              {/* Keymer */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-left mb-3 uppercase">
                    Tomás Keymer Ovalle
                  </p>
                  <p className="text-left">
                    Tomás Keymer Ovalle es arquitecto y Magíster en Arquitectura
                    (MARQ) de la Pontificia Universidad Católica de Chile,
                    titulado en 2021. Entre 2022 y 2025 trabajó en la oficina de
                    Mathias Klotz, participando en proyectos de diversas
                    escalas, como viviendas, hoteles y edificios públicos. Desde
                    joven ha trabajado en construcción en madera en el sur de
                    Chile, lo que le dio una relación directa con el oficio de
                    la arquitectura y la carpintería. Esa experiencia temprana
                    motivó su interés por proyectar y construir, entendiendo la
                    arquitectura desde lo técnico y desde el vínculo con el
                    lugar. Ha realizado ayudantías en el Taller 1 de
                    Representación en la Escuela de Arquitectura de la
                    Pontificia Universidad Católica de Chile.
                  </p>
                </div>
              </div>

              {/* Sanfuentes */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-left mb-3 uppercase">
                    Andrés Sanfuentes Urzúa
                  </p>
                  <p className="text-left">
                    Andrés Sanfuentes Urzúa se tituló de arquitecto en la
                    Pontificia Universidad Católica de Chile en el año 2021,
                    donde también obtuvo el grado de Magíster en Arquitectura.
                    En 2022 obtuvo el primer lugar en un concurso para un
                    edificio universitario, en colaboración con la oficina
                    Aguiló Pedraza. Entre 2022 y 2025 integró el equipo de Max
                    Núñez Arquitectos, participando en el desarrollo de
                    viviendas unifamiliares, edificios públicos, hoteles y
                    espacios colectivos, abordando temáticas como arquitectura,
                    paisajismo e interiorismo. Paralelamente, ha desarrollado
                    proyectos de forma independiente en el sur de Chile, con un
                    enfoque centrado en la materialidad, el interiorismo y la
                    relación entre la arquitectura y el paisaje.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>
        </div>
      </section>

      {/* Créditos */}
      <section className="flex col-span-3 lg:grid lg:grid-cols-5 mb-12 lg:mb-6 text-[#adadad] ">
        <div className="col-span-1 uppercase text-left">Créditos</div>
        <div className="text-left col-span-4">
          <a
            className="hover:text-[#000000]"
            href="https://www.instagram.com/fffvbo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website: Fabián Leiva
          </a>
        </div>
      </section>
    </main>
  );
};

export default Office;
