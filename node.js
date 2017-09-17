
function Node(v){
    this.value = v;
    this.next = null;
}
function List(){
    this.head = null;
    this.add = function(v){
        var node = new Node(v);
        var current = this.head;
        if(this.head == null){
            this.head = node;
        }
        else{
            while(current.next != null){
              console.log(current.value);
              current = current.next;
            }
            current.next = node;
        }
    }
}
var node = new Node(1);
var list = new List();
list.add(1);
list.add(2);
