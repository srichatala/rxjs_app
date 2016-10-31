import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn=$('#btnClick');

const btn$ = Rx.Observable.fromEvent(btn, 'click');

btn$.subscribe(
    function(e){
        console.log(e.timeStamp);
    },
    function(err){
        console.log(err);
    },
    function(){
        console.log('Completed');
    }
);

const input=$('#value');
const output=$('#output');

const input$ = Rx.Observable.fromEvent(input, 'keyup');

input$.subscribe(
    function(e){
        output.html(e.target.value);
    },
    function(err){
        console.log(err);
    },
    function(){
        console.log('Completed');
    }
);


const mover$ = Rx.Observable.fromEvent(document, 'mousemove');

mover$.subscribe(
    function(e){
        output.html('X: '+e.clientX+','+'Y: '+e.clientY);
    },
    function(err){
        console.log(err);
    },
    function(){
        console.log('Completed');
    }
);