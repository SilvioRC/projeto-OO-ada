import Emprestimo from './Emprestimo';
class EmprestimoPessoal extends Emprestimo {

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
    
    aprovado()  {
        
        return this.getIdade() >= 18 && this.getRenda() > 2500;
        
    }

}
export default EmprestimoPessoal;