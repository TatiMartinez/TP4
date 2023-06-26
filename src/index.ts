// Clase base para representar una entidad en el sistema de voto
class EntidadVoto {
  id: number;
  nombre: string;
  
  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}

// Clase para representar un partido político
class PartidoPolitico extends EntidadVoto {
  // Atributos adicionales de un partido político
  lider: string;
  ideologia: string;
  
  constructor(id: number, nombre: string, lider: string, ideologia: string) {
    super(id, nombre);
    this.lider = lider;
    this.ideologia = ideologia;
  }
}

// Clase para representar un candidato
class Candidato extends EntidadVoto {
  partidoPolitico: PartidoPolitico;
  lista: Lista;
  
  constructor(id: number, nombre: string, partidoPolitico: PartidoPolitico, lista: Lista) {
    super(id, nombre);
    this.partidoPolitico = partidoPolitico;
    this.lista = lista;
  }
}

// Clase para representar una lista
class Lista extends EntidadVoto {
  candidatos: Candidato[];
  
  constructor(id: number, nombre: string, candidatos: Candidato[]) {
    super(id, nombre);
    this.candidatos = candidatos;
  }
}

// Clase para representar un votante
class Votante extends EntidadVoto {
  dni: string;
  
  constructor(id: number, nombre: string, dni: string) {
    super(id, nombre);
    this.dni = dni;
  }
}

// Clase para representar un voto
class Voto {
  votante: Votante;
  candidato: Candidato;
  
  constructor(votante: Votante, candidato: Candidato) {
    this.votante = votante;
    this.candidato = candidato;
  }
}

// Ejemplo de uso:

// Crear partidos políticos
const partido1 = new PartidoPolitico(1, "Partido A", "Líder A", "Ideología A");
const partido2 = new PartidoPolitico(2, "Partido B", "Líder B", "Ideología B");

// Crear listas de candidatos
const lista1 = new Lista(1, "Lista 1", [new Candidato(1, "Candidato 1", partido1, lista1), new Candidato(2, "Candidato 2", partido1, lista1)]);
const lista2 = new Lista(2, "Lista 2", [new Candidato(3, "Candidato 3", partido2, lista2), new Candidato(4, "Candidato 4", partido2, lista2)]);

// Crear votantes
const votante1 = new Votante(1, "Votante 1", "12345678");
const votante2 = new Votante(2, "Votante 2", "87654321");

// Realizar un voto
const voto1 = new Voto(votante1, lista1.candidatos[0]);
const voto2 = new Voto(votante2, lista2.c
