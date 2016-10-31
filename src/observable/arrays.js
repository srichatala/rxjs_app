import $ from 'jquery';
import Rx from 'rxjs/Rx';

const list = [1,2,3,4,5];

const list$ = Rx.Observable.from(list);

list$.subscribe(
    item=>{
        console.log(item);
    },
    err=>{
        console.log(err);
    },
    complete=>{
        console.log('Completed');
    }
)

const posts = [{title:"Post header",body:" this header post"},
{title:"Post body",body:" this body post"},
{title:"Post footer",body:" this footer post"}];

const posts$ = Rx.Observable.from(posts);
const output = $('#posts');
posts$.subscribe(
    item=>{
        output.append('<li><h1>'+item.title+'</h1><p>'+item.body+'</p></li>')
    },
    err=>{
        console.log(err);
    },
    complete=>{
        console.log('Completed');
    }
)
const map = new Map([[1,2],[3,4],[5,6]]);
const map$ = Rx.Observable.from(map);
map$.subscribe(
    item=>{
        console.log(item);
    },
    err=>{
        console.log(err);
    },
    complete=>{
        console.log('Completed');
    }
)