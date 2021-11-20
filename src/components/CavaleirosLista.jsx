import cavaleirosBronze from '../data/cavaleiros'

function CavaleirosLista() {
    return(
        <div>
            {cavaleirosBronze.map(cavaleiro => 
                <div>
                    <img alt={cavaleiro.nome} src={cavaleiro.imagem}/>
                    <h1 key={cavaleiro.id}>
                        {cavaleiro.nome}
                    </h1>
                    <p>
                        {cavaleiro.armadura}
                    </p>
                    <p>
                        {cavaleiro.constelacao}
                    </p>
                </div>
            )
            }
        </div>

    )
}

export default CavaleirosLista