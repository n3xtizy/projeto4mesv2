import {AbstractEntity} from "./abstract-entity.model";
import {StatusAgenda} from "./status-agenda.enum";
import {Paciente} from "./paciente.model";
import {Medico} from "./medico.model";
import {Secretaria} from "./secretaria.model";

export class Agenda extends AbstractEntity {
    statusAgenda! : StatusAgenda
    dataDe! : Date
    dataAte! : Date
    encaixe! : boolean
    paciente! : Paciente
    medico! : Medico
    secretaria! : Secretaria
}