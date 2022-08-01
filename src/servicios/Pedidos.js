export async function pedirMetas() {
    const response = await fetch('/api/metas');
    const metas = await response.json();
    return metas;
}

export async function pedirMeta(id) {
    const response = await fetch(`/api/metas/${id}`);
    const meta = await response.json();
    return meta;
}

export async function crearMeta(meta) {
    // const response = await fetch('/meta.json');
    // const metaCreada = await response.json();
    // return metaCreada;
    const response = await fetch('/api/metas',{
        method: 'POST',
        body: JSON.stringify(meta),
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    });    
    const metaCreada = await response.json();
    return metaCreada;
}

export async function actualizarMeta(meta) {
    // const response = await fetch('/meta.json');
    // const metaActualizada = await response.json();
    // return metaActualizada;
    const response = await fetch(`/api/metas/${meta.id}`,{
        method: 'PUT',
        body: JSON.stringify(meta),
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    });    
    const metaActualizada = await response.json();
    console.log('metaActualizada --> ',metaActualizada)
    return metaActualizada;
}

export async function eliminarMeta(id) {
    // const response = await fetch('/meta.json');
    // const metas = await response.json();
    // return metas.id;
    await fetch(`/api/meta/${id}`,{
        method: 'DELETE'
    });
    console.log('Meta eliminada : ',id);
}