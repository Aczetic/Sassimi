#include<bits/stdc++.h>
using namespace std;

class Node{
    public:
        int data;
        Node * next = nullptr;
};

void sett(Node* head){
    int size = 0 ;

    Node* temp = head; Node* ifForTheLastLeft = nullptr;
    while( temp ){
        size++; temp = temp->next;
    }
    cout << "size is " << size;
    int i;
    temp = head; 
    for( i = 1 ; i*(i+1)/2 <= size ; i++){  
        if(i % 2 == 0){
            Node* cont = nullptr;Node* third = nullptr; Node* newHead =  nullptr;
            cont = temp->next;

            for(int j = 1 ; j <= i ; j++){
                third = cont;
                cont = cont->next;
                third->next = newHead;
                newHead= third;
            }//reverse complete
            cout << "the head: " << newHead->data;
            temp->next = newHead; // connect the temp with the new head

            while(newHead->next){ // bring the newhead to the end of reverse link
                newHead = newHead->next;
            }
            cout << " the tail " << newHead->data << ' ';
            newHead->next = cont;//connect it back the ll
            temp = cont; // bring the temp to the head new chunk
            ifForTheLastLeft = newHead; // when there is even chunk left at the last
        }else{
            for(int j = 1; j < i; j++){
                temp = temp->next;
            }
        }
    }

    i = size - ( i*(i-1)/2);
    cout << endl << " the left over size is : " << i;
    if( i % 2 == 0 ){
        temp = ifForTheLastLeft;
        cout << endl << " the current head is " << temp->data << endl;
        Node* newHead = nullptr  ; Node * cont = nullptr ; Node* third = nullptr;
        cont = temp->next;
        while(cont){
            third = cont;
            cont = cont->next;
            third->next = newHead;
            newHead = third;
        }
        temp->next = newHead;
        cout <<endl << " the new head now is " << newHead ->data;
    }

}

int main(){
    int n;
    cin >> n;
    Node * header = nullptr ; Node* t = nullptr;
    for(int i = 0 ; i < n; i++){
        if(!header){
            header = new(Node);
            cin >> header->data;
            t = header;
        }else{
            t->next = new(Node);
            cin >> t->next->data ;
            t = t->next;
        }
    }

    t = header;

    sett(header);

    while( t ){
        cout << t->data << ' ';
        t = t->next;
    }
    
    return 0;
}