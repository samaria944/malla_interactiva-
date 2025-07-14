const materiasPorPeriodo = [
  {
    nombre: "1er Período",
    materias: [
      "Español General",
      "Inglés I",
      "Filosofía General",
      "Sociología",
      "Métodos Cuantitativos I"
    ]
  },
  {
    nombre: "2do Período",
    materias: [
      "Historia de Honduras",
      "Inglés Técnico",
      "Métodos Cuantitativos II",
      "Principios de Economía",
      "Contabilidad"
    ]
  },
  {
    nombre: "3er Período",
    materias: [
      "Historia del Comercio Internacional",
      "Métodos Cuantitativos III",
      "Administración de Empresas",
      "Microeconomía",
      "Informática I"
    ]
  },
  {
    nombre: "4to Período",
    materias: [
      "Introducción al Comercio Internacional",
      "Macroeconomía",
      "Costos y Control Presupuestario",
      "Análisis Cuantitativo",
      "Informática II"
    ]
  },
  {
    nombre: "5to Período",
    materias: [
      "Desarrollo Organizacional",
      "Empresa y Derecho",
      "Mercadotecnia",
      "Educación Ambiental",
      "Métodos y Técnicas de la Investigación"
    ]
  },
  {
    nombre: "6to Período",
    materias: [
      "Cooperación Internacional",
      "Aspectos Legales del Comercio Internacional",
      "Estructura Económica",
      "Optativa en Humanidades",
      "Taller (arte, cultura o deporte)"
    ]
  },
  {
    nombre: "7mo Período",
    materias: [
      "Legislación y Prácticas Aduaneras I",
      "Tecnología y Productos Agroindustriales",
      "Mercadotecnia Internacional I",
      "Financiación en el Comercio Internacional",
      "Promoción de Mercados Externos"
    ]
  },
  {
    nombre: "8vo Período",
    materias: [
      "Economía Internacional",
      "Legislación y Prácticas Aduaneras II",
      "Distribución Física Internacional",
      "Investigación y Selección de Mercados"
    ]
  },
  {
    nombre: "9no Período",
    materias: [
      "Política Económica",
      "Costos y Precios en el Comercio Interno",
      "Operativa del Comercio Internacional",
      "Relaciones Institucionales y Protocolo"
    ]
  },
  {
    nombre: "10mo Período",
    materias: [
      "Agroindustria y Ecosistema",
      "Desarrollo de Productos y Control de Calidad",
      "Finanzas de Empresas"
    ]
  },
  {
    nombre: "11vo Período",
    materias: [
      "Finanzas Internacionales",
      "Estrategia de Mercadotecnia Internacional",
      "Comercialización Internacional"
    ]
  },
  {
    nombre: "12vo Período",
    materias: [
      "Negociaciones Internacionales",
      "Formulación y Evaluación de Proyectos",
      "Seminario Taller de Investigación"
    ]
  }
];

const contenedor = document.getElementById("malla");

materiasPorPeriodo.forEach(periodo => {
  const div = document.createElement("div");
  div.classList.add("semestre");

  const titulo = document.createElement("h2");
  titulo.textContent = periodo.nombre;
  div.appendChild(titulo);

  periodo.materias.forEach(materia => {
    const item = document.createElement("div");
    item.classList.add("materia");
    item.textContent = materia;

    item.addEventListener("click", () => {
      item.classList.toggle("activa");
    });

    div.appendChild(item);
  });

  contenedor.appendChild(div);
});
