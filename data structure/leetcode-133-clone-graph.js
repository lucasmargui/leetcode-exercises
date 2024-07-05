// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

 

// Example 1:


// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).



// Contexto Geral
// A função clone é uma função recursiva que clona um nó e seus vizinhos de um grafo.
// A função faz uso de uma estrutura map para armazenar os nós já clonados, evitando recriações desnecessárias.
// root representa o nó atual do grafo que está sendo clonado.
// node é o nó inicial do grafo a ser clonado.
// Detalhamento do Código
// Declaração da Função clone:

// javascript
// Copiar código
// const clone = root => {
// Define uma função clone que recebe um argumento root, que representa o nó atual do grafo a ser clonado.
// Verificação e Criação do Nó Clonado:

// javascript
// Copiar código
// if (!map.has(root.val)) {
//   map.set(root.val, new Node(root.val));
//   map.get(root.val).neighbors = root.neighbors.map(clone);
// }
// if (!map.has(root.val)) {: Verifica se o nó com valor root.val já foi clonado. Se não foi:
// map.set(root.val, new Node(root.val));: Cria um novo nó com o mesmo valor de root e o armazena no map usando root.val como chave.
// map.get(root.val).neighbors = root.neighbors.map(clone);: Para cada vizinho do nó root, chama a função clone recursivamente e atribui o resultado ao array neighbors do nó clonado. Isto clona recursivamente todos os vizinhos.
// Retorno do Nó Clonado:

// javascript
// Copiar código
// return map.get(root.val);
// Retorna o nó clonado correspondente ao valor root.val. Este retorno permite que a recursão construa corretamente a estrutura do grafo clonado.
// Retorno da Função clone:

// javascript
// Copiar código
// return clone(node);
// Executa a função clone começando pelo nó inicial node e retorna o grafo clonado inteiro.

var cloneGraph = function(node) {
    if (node === null) {
      return null;
    }
    const map = new Map();
    const clone = root => {
      if (!map.has(root.val)) {
        map.set(root.val, new Node(root.val));
        map.get(root.val).neighbors = root.neighbors.map(clone);
        
      }
  
      
      return map.get(root.val);
    }
    return clone(node);
  };