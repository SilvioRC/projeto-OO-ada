import Emprestimo from "./Emprestimo";
class EmprestimoAutomovel extends Emprestimo {
    constructor(
        nome: string,
        idade: number,
        valor: number,
        parcelas: number,
        renda: number,
        habilitacao: boolean,
        matriculado: boolean
    ) {
        // herdando os atributos da classe pai Emprestimo
        super(nome, idade, valor, parcelas, renda, habilitacao, matriculado);
       
    }
    // método aprovado que é obrigatório pois herda da classe abstrata Emprestimo
    aprovado() {
        // método aprovado que é obrigatório nas classes filhas pois herda da classe abstrata Emprestimo
        return this.getRenda() >= 3000 && this.getHabilitacao()
        
    }

    exibirCredores(){
        console.log("Exibindo credores")
    }

}
// exportando a classe
export default EmprestimoAutomovel;