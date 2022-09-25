export function getItem({id, nome, descricao, status, onDelete, onUpdate, onUpdateNome, onUpdateDescricao}){
    const element = document.createElement("div");
    element.append(getCheckbox({ status, onClick: onUpdate }));
    element.append(getUpdateNome({onClick: onUpdateNome}));
    element.append(getUpdateDecricao({onClick: onUpdateDescricao}))
    element.append(getAdd({nome, descricao, status}));
    element.append(getDeletarItem({ onClick: onDelete }))
    return element;
}

export function getDeletarItem({ onClick }){
    const button = document.createElement('button');
    button.innerHTML = 'Deletar';

    button.onclick = () =>{
        onClick();
    };
    return button;
}

export function getCheckbox({ status, onClick }){
    const button = document.createElement("input");
    button.setAttribute("type", "checkbox");
    button.innerHTML = status === 'pendente' ? 'completo' : 'undo';
 
    button.onclick = () => {
        onClick();
    };

    return button;
}

export function getAdd({nome, descricao, status}){
    return `nome = ${nome}, status = ${status}, descrição = ${descricao}`;

}
export function getUpdateNome({ onClick }){
    const button = document.createElement('button');
    button.innerHTML = 'Mudar Nome';

    button.onclick = () =>{
        onClick();
    };
    return button;
}
export function getUpdateDecricao({ onClick }){
    const button = document.createElement('button');
    button.innerHTML = 'Mudar Descricao';

    button.onclick = () =>{
        onClick();
    };
    return button;
}
