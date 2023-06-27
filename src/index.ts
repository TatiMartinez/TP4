/*
--------------Trabajo Practico 4-----------------
Definir las clases necesarias para representar un
Sistema de Voto Electrónico que permita manejar: los partidos
políticos, los candidatos, las listas, los votantes, votos.
Tener en cuenta que el sistema debe servir para poder realizar elecciones legislativas,
provinciales y nacionales
*/

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
  