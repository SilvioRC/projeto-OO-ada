import Emprestimo from "./Emprestimo";
class EmprestimoEstudantil extends Emprestimo{

    constructor(
        nome: string,
        idade: number,
        valor: number,
        parcelas: number,
        renda: number,
        habilitacao: boolean,
        matriculado: boolean
    ) {
        
        super(nome, idade, valor, parcelas, renda, habilitacao, matriculado);
    }
    
    aprovado(){
        return this.getIdade() >= 18 && this.getIdade() <= 30 && this.getRenda() > 1500 && this.getMatriculado()

        
    }
}
export default EmprestimoEstudantil;