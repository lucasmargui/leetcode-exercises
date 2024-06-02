/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {

    var startGeneArray = startGene.split('');
    var endGeneArray = endGene.split('');
    var set = new Set();
    var setBank = new Set(bank);
    var mutations = ['A','C','G','T'];
    var tempBank = [];

    var queue = [startGene];

    while(queue.length > 0){
        let gene = queue.pop();
        tempBank = []
        if(!(set.has(gene))){
            set.add(gene)
            let tempGeneArray = gene.split('');
            for (let i = 0; i < tempGeneArray.length; i++ ){
                let prev = tempGeneArray[i];
                for(let j = 0; j < mutations.length; j++ ){
                    tempGeneArray[i] = mutations[j];
                    let geneVariation = tempGeneArray.join('');
                    if(!(set.has(geneVariation))){
                        set.add(geneVariation);
                        tempBank.push(geneVariation);
                    }
                }
                 tempGeneArray[i] = prev;
            }
        }
        while(tempBank.length > 0){
            let tempGene = tempBank.pop();
            console.log(tempGene)
            if(setBank.has(tempGene)){
                queue.push(tempGene);
            }
        }   
    }


    console.log(set)

    
};