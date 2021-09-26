import clientAPI from "./AxiosConfig";
import Swal from "sweetalert2";

const ContatosServices = {

    getContatos(contato =''){
        return  clientAPI.get(`/contatos`);
    },


    criarContatos(contato: any){
        return clientAPI.post(`/contatos`,contato);
    },

    atualizarContatos(contato: any){       
        return clientAPI.put(`/contatos/`+contato.id, contato);
    },

    excluirContatos(id: number){
       
        return clientAPI.delete(`/contatos/`+id);
    },



}

export default ContatosServices;
