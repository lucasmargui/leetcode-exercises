
 function teste() {
 
    var list1 = [];
    var list2 = [0];
    
    const list1Count = list1 !== null
      ? list1.length
      : []
      
     const list2Count = list2 !== null
      ? list2.length
      : []   
    

    var listMerged = [];

    var l1Index = 0;
    var l2Index = 0;
    

    while(l1Index < list1Count || l2Index < list2Count){
        
        if( l1Index < list1Count && l2Index >= list2Count){
            
            listMerged.push(list1[l1Index]);
            l1Index++;
            
            
        }
        
        else if( l2Index < list2Count && l1Index >= list1Count){
            
            listMerged.push(list2[l2Index]);
            l2Index++;
        }
        
        else {
            
            if(list1[l1Index] < list1[l2Index]){
            
            listMerged.push(list1[l1Index]);
            l1Index++;
                
            }else if(list1[l1Index] > list1[l2Index]){
                
                listMerged.push(list2[l2Index]);
                l2Index++;
            }else{
                
                listMerged.push(list1[l1Index]);
                listMerged.push(list2[l2Index]);
                l1Index++;
                l2Index++;
            }
            
        }

    }

  console.log(currentNode);
};


teste();