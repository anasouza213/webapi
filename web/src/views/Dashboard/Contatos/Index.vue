<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">Contatos</h3>

    
    <div class="mt-8">
        <div class="mt-6">       

        <div class="mt-3 flex flex-col sm:flex-row">
          

          <div class="relative mt-2 sm:mt-0 w-full grid gap-4 place-items-center md:pl-12">
          
            <div class="p-6 bg-white rounded-md shadow-md"> 
              <h2 class="text-lg text-gray-700 font-semibold capitalize">
                Cadastrar
              </h2>

              <form @submit.prevent="register">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div>
                      <label class="text-gray-700" for="username">Nome</label>
                      <input
                        class="w-full mt-2 rounded-md focus:border-indigo-600"
                        type="text"  v-model="contato.nome"                 
                      />                     
                  </div>

                  <div>
                    <label class="text-gray-700" for="emailAddress"
                      >Email</label
                    >
                    <input
                      class="w-full mt-2 rounded-md focus:border-indigo-600"
                      type="email" v-model="contato.email"
                    />
                  </div>

                  <div>
                    <label class="text-gray-700" for="telefone">Telefone</label>
                    <input
                      class="w-full mt-2 rounded-md focus:border-indigo-600"
                      type="text" v-model="contato.telefone"
                    
                    />
                  </div>

                  <div>
                    <label class="text-gray-700" for="imagem"
                      >Imagem(URL)</label
                    >
                    <input
                      class="w-full mt-2 rounded-md focus:border-indigo-600"
                      type="text" v-model="contato.imageUrl"
                    />
                  </div>
               </div>
                <div class="grid grid-cols-1 sm:grid-cols-4 mt-8">
                   <div v-if="!isEdit">
                      <w-btn @click="this.cadastrar(contato)"  variant="success">Salvar</w-btn>                
                    </div>
                    <div v-if="isEdit" >
                      <w-btn @click="this.alterar(contato)"  variant="primary">Alterar</w-btn>                   
                    </div>
                     <div >
                      <w-btn @click="this.limpar()" outlined variant="primary">Limpar</w-btn>                   
                    </div>
                </div>

               
              </form>
            </div>
           
          </div>
        </div>

        <div class="-mx-4 sm:-mx-8 px-4 sm:px-24 py-16 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Nome
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    email
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Telefone
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    
                  </th>
                   <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                <tr v-for="(u, index) in getContatos" :key="index">
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-full h-full rounded-full"
                          :src="u.imageUrl"
                          alt
                        />
                      </div>                    

                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{ u.nome }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-nowrap">{{ u.email }}</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ u.telefone }}
                    </p>
                  </td>
                   <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                  
                     <w-btn @click="this.editar(u)" outlined variant="primary">Editar</w-btn> 
                  
                  </td>
                   <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >  
                        <w-btn @click="this.delete(u.id)" outlined variant="danger">Excluir</w-btn>                   
                  </td>
                
                </tr>
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script lang="ts">
import {
    defineAsyncComponent,
    defineComponent,
    VNode
} from "vue";
import Button from "../../../components/actions/Button.vue";
import ContatosServices from "../../../services/ContatosServices";

export default defineComponent({
    name: "ListaContatos",
    data() {
        return {
            isEdit: false,
            getContatos: [],
            contato: {
              id: '',
              nome: '',
              email: '',
              telefone: '',
              imageUrl: ''
            }
        };
    },
    components: {
        "w-btn": Button,
    },
  mounted() {
    this.lista();
        
  },
  methods: {
      lista(){
        ContatosServices.getContatos()
              .then((result: any) => {
                  this.getContatos = result.data;
                  console.log(result.data);
              })
              .catch((err: any) => {});
      },
      editar(user: any){
        this.isEdit = !this.isEdit,
        this.contato = user;
      },
      alterar(contato: any){
         ContatosServices.atualizarContatos(contato).then((result)=>{
           this.lista();
           this.contato = {};
            this.isEdit = false;
         });
      },
       cadastrar(contato: any){
         ContatosServices.criarContatos(contato).then((result)=>{
           this.lista();
           this.contato = {};
         });
      },
      delete(id: number){
          console.log(id);
            ContatosServices.excluirContatos(id).then((result: any) =>{
              this.lista();              
            });
      }, 
      limpar(){
         this.contato = {};
      }   
  },
    
});
</script>

<style>
</style>
