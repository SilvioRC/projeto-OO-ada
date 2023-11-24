abstract class Emprestimo {
    
    constructor(
        private nome: string,
        private idade: number,
        private valor: number,
        private parcelas: number,
        private renda: number,
        private habilitacao: boolean,
        private matriculado: boolean
        ) 
        {}

        abstract aprovado(): boolean;

    // usando gets porque os atributos acima deixei privado
    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    getValor(){
        return this.valor;
    }

    getParcelas(){
        return this.parcelas;
    }

    getRenda(){
        return this.renda;
    }

    getHabilitacao(){
        return this.habilitacao
    }

    getMatriculado(){
        return this.matriculado;
    }
    
}
export default Emprestimo;
