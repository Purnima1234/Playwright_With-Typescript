class person{
//Hide your childersn
#Child1;
#child2;

constructor(name,ch1,ch2) {
    this.name=name;
    this.ch1=ch1;
    this.ch2=ch2;

}
getchild1(){
    return this.#child1;
}
setchild1(changed_name){
    this.#child1=changed_name;

}}

let p=new Person("Purnima", "Honey", "Sweety");
console.log(p.name);
console.log(p.getchild1());
