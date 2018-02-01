import { Phone } from "./phone";

export class Person {

    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    email: string;
    telefones: Phone[] = [];

}
