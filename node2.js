function Node(v) {
    this.value = v;
    this.next = null;
    console.log("Node " + this.value);
}

function List() {
    this.head = null;
    this.add = function(v) {
        var node = new Node(v);
        if(this.head == null) {
            this.head = node;
        } else {
            var current = this.head;
            while(current.next != null) {
                console.log('--> ' + current.value);
                current = current.next;
            }
            
            current.next = node;
            console.log('==> ' + v);
        }
        
        console.log('\n');
    
    }
}

var list = new List();
list.add(0);
list.add(1);
list.add(2);
list.add(3);
list.add(4);