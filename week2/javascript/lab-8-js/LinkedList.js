let linkedlist = new LinkedList();

linkedlist.add(1);

linkedlist.add(2);

linkedlist.add(3);

linkedlist.print(); //Expected Result: LinkedList{1,2,3};

linkedlist.remove(2);

linkedlist.print(); //Expected Result: LinkedList{1,3};

function LinkedList(){
    this.head;

    this.add = (data) => {
        if(!this.head){
            this.head = new Node(data);
            return;
        }

        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = new Node(data);
    };
    this.remove = function (data){
        if(!this.head){
            console.log("Can not remove from empty list");
            return;
        }

        if(this.head.data === data){
            this.head = this.head.next;
        }

        let curr = this.head;
        while(curr.next){
            if(curr.next.data === data){
                curr.next = curr.next.next;
                break;
            }
            curr = curr.next;
        }
    };
    this.print = function (){
        let output = "{";
        let curr = this.head;
        while(curr){
            output += curr.data + ", ";
            curr = curr.next;
        }
        output += "\b\b}";
        console.log(output);
    };
}

function Node(data){
    this.data = data;
    this.next;
}
