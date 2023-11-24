import SolicitacaoEmprestimo from "./SolicitacaoEmprestimo";
import EmprestimoAutomovel from "./EmprestimoAutomovel";
import EmprestimoEstudantil from "./EmprestimoEstudantil";
import EmprestimoPessoal from "./EmprestimoPessoal";
class Usuario {
    
    
    static solicitar(){
        SolicitacaoEmprestimo.add(new EmprestimoPessoal('Mateus', 17, 5000, 10, 3000, true, false));
        SolicitacaoEmprestimo.add(new EmprestimoAutomovel('Ana', 25, 7000, 14, 3500, true, false));
        SolicitacaoEmprestimo.add(new EmprestimoEstudantil('João', 20, 2000, 4, 2000, false, true));

        // acesando o método direto através da classe, pois o método é static
        SolicitacaoEmprestimo.processarSolicitacoes();
    }
    


}
// acesando o método direto através da classe, pois o método é static
Usuario.solicitar();







/**
 * instalar typescript
 * npm i -g typescript
 * Pra rodar usando ts-node
 * baixar npm install -g ts-node para usar tsc
 * 
 */
// npx ts-node Usuario.ts