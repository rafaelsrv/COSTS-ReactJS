function ProjectForm(){
    return(
    <form>

        <input type="text" placeholder = "Insira o nome do projeto"/>
        <input type="text" placeholder = "Insira o orçamento total do projeto"/>
        <div>
            <select name="category_id">
                <option disabled selected>Selecione a categorvia</option>
            </select>
        </div>
        <div>
            <input type="submit" value="Criar Projeto"/>
        </div>
    </form>
    )
}
export default ProjectForm