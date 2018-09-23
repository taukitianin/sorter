
class Sorter {
  constructor() {
    this.elems = [];
    this.forSort = [];
    this.compareFunction = function(l,r){
        return l - r;
    }
    
  }
  
  add(element) {
    this.elems.push(element);
  }

  at(index) {
    return this.elems[index];
  }

  get length() {
    return this.elems.length;
  }

  toArray() {
    return this.elems;
  }

  sort(indices) {
    indices.sort(function(l,r){
      return l - r;
  });
    for(let i=0; i<indices.length; i++){
      this.forSort.push(this.elems[indices[i]]);
    }
    //console.log(this.forSort);
    this.forSort.sort(this.compareFunction);
    //console.log(this.forSort);
    for(let i=0; i<indices.length; i++){
      this.elems[indices[i]] = this.forSort[i];
    }
    this.forSort = [];
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}
module.exports=Sorter;
