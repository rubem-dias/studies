##USE STATE
-----------

* const [counter, setCounter ] = useState(0); 
    estou definindo uma const que tera um contador e um "mudador" de estado pro contador. Sendo o estado inicial = 0;

* <button onClick={() => setCounter(counter + 1)}> Add </button>
    a cada click, passo uma o set counter como um retorno de uma funcao, que ira pegar o counter e adicionar 1


## USE EFFECT
------------

* Não necessáriamente compáravel com ciclos de vida do react, pois são para propósitos e funcionam diferente, apesar de ter os resultados parecidos.
    parecido com componentDidMount, componentWillMount e componentDidUpdated juntos.

* Use effect recebe dois parametros, (() => {}, [array de dependencias])

* o array de dependencias, é mais ou menos quando que a função do parametro execute*
    por exemplo: toda vez que uma variavel dentro do array de dependencias for alterada, o useEffect executa de novo a funcao. 
    quando o array esta vazio, ele executa apenas uma vez.

* document.title = {counter} // no titulo, ira aparecer apenas o numero 0 se dentro do array estiver vazio, pois so vai executar uma vez, ja se no caso tiver o proprio counter, ira atualizar sempre que ele mesmo mudar.

## Resumo
----------

 * Use effect eh uma funcao que depende de algo para ser executado.

 * Podemos dizer a grosso modo que: O useEffect com o array vazio é como se fosse o <componentDidMount>
    O useEffect com array ou mais parametros dentro do array, seria como o <didUpdate> fazendo uma especie de comparacao para ver se precisa recarregar
     o <didUnmount> pode ser parecido com a condicao dentro do appjs que some apos 5segundos

