
// 433. Minimum Genetic Mutation
// Solved
// Medium
// Topics
// Companies
// A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

// Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

// For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
// There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.

// Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.

// Note that the starting point is assumed to be valid, so it might not be included in the bank.

 

// Example 1:

// Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
// Output: 1
// Example 2:

// Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
// Output: 2
 

var minMutation = function(startGene, endGene, bank) {
    let setBanks = new Set(bank);  
    let strChars = ['A', 'T', 'C', 'G'];        
    let queue = [[startGene,0]];
    let gene, dist, i, j;
    if( !setBanks.has(endGene) ) return -1;
    
    while( queue.length > 0 ) {
        [gene,minimumVariation] = queue.shift();
        if( gene == endGene ) return minimumVariation;
        
        for( i=0; i<8; i++ ) {
            for( j=0; j<4; j++ ) {
                if( gene[i] == strChars[j] ) continue;
                var geneVariation = gene.slice(0,i) + strChars[j] + gene.slice(i+1);
                if( setBanks.has(geneVariation) ) {
                    queue.push([geneVariation,minimumVariation+1]);
                    setBanks.delete(geneVariation);
                }
            }
        }
    }   
    return -1;
};