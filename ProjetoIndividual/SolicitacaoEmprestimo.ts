import Emprestimo from "./Emprestimo";
abstract class SolicitacaoEmprestimo {
    
    //Array estático vazio pois não precisarei criar uma instância da classe
    static Solistacoes: Emprestimo[] = [];

    // O método add adiciona uma nova solicitação de empréstimo ao array Solistacoes
    static add(solicitacao : Emprestimo){ // recebe um parmetro solicitacao do tipo Emprestimo
        this.Solistacoes.push(solicitacao); // adicionando um item ao array

    }

    static processarSolicitacoes(){
        // a cada solicitação verifica se foi aprovada ou não
        // atráves do método aprovado() do tipo boolean que precisa atender todas exigencias usando &&
        this.Solistacoes.forEach(solicitacao => {
        let resultado = solicitacao.getNome() +  ' ' + (solicitacao.aprovado() ? 'foi [APROVADO[A]]' : 'foi [REPROVADO[A]]');
        console.log(resultado);
        })
    }

    
    
}
export default SolicitacaoEmprestimo;