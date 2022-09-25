import { getItem } from "./elements";
import { deleteItem, getTodos, save, updateItem } from "./api";

function getNome() {
    const input = document.querySelector('[name=new-nome]')
    return input.value;
  }
  function getDescricao() {
    const input = document.querySelector('[name=new-descricao]')
    return input.value;
  }

export function listagem(){
    const button = document.getElementById('new-adicionar');

    button.onclick = async () => {
        const inputNome = getNome();
        const inputDescricao = getDescricao();
        await save({
            nome: inputNome,
            status: 'pendente',
            descricao: inputDescricao
        })
        refreshTodoList();
    }
}

async function refreshTodoList(){
    const listaTodo = await getTodos();
    const listarElemento = document.getElementById("lista");
    listarElemento.innerHTML = '';

    listaTodo.forEach(todo => {
        const onDelete = async () =>{
            await deleteItem(todo.id);
            refreshTodoList();
        }

        const onUpdate = async () =>{
            await updateItem({
                ...todo,
                status: todo.status === 'completo' ? 'pendente': 'completo'
            });
            refreshTodoList();
        };

        const onUpdateNome = async () =>{
            await updateItem({
                ...todo,
                nome: getNome()
            });
            refreshTodoList();
        };
        const onUpdateDescricao = async () =>{
            await updateItem({
                ...todo,
                descricao: getDescricao()
            });
            refreshTodoList();
        };

        listarElemento.append(getItem({
            ...todo,
            onDelete,
            onUpdate,
            onUpdateNome,
            onUpdateDescricao
        })); 

    });



}

export function loadLista() {
    refreshTodoList();
  }
  