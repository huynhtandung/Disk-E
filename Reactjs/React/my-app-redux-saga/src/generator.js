console.log('Learning garenator function');

function* helloGeneratorFunction(){
    yield 2019;
    return 'Tu hoc lap trinh redux saga';
}

const result = helloGeneratorFunction();
console.log(result.next());
console.log(result.next());
